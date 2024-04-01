{
 description = "Astro website using Bun";

 inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    astro.url = "github:withastro/astro";
    bun.url = "github:bunjs/bun";
 };

 outputs = { self, nixpkgs, flake-utils, astro, bun }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodePackages = pkgs.nodePackages;
        astro = nodePackages.astro;
        bun = nodePackages.bun;
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = [
            astro
            bun
            pkgs.nodejs
          ];
        };

        packages = {
          astro = astro;
          bun = bun;
        };

        defaultPackage = self.packages.${system}.astro;
      }
    );
}