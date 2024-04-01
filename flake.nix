{
 description = "TeaClient Website";

 inputs = {
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";
 };

 nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
 };

 outputs = { self, nixpkgs, devenv, systems, ... } @ inputs:
    let
      forEachSystem = system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
        devShell = devenv.lib.mkShell {
          inherit inputs;
          pkgs = nixpkgs.legacyPackages.${system};
          modules = [
            {
              packages = [ nixpkgs.legacyPackages.${system}.hello ];
              languages.javascript.bun.enable = true;
              processes.run.exec = "hello";
            }
          ];
        };
      };
    in
    {
      packages = forEachSystem (import systems);
      devShells = forEachSystem (import systems);
    };
}