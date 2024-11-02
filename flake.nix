{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ self, nixpkgs, flake-parts, ... }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = nixpkgs.lib.systems.flakeExposed;
      perSystem = {
        pkgs,
        config,
        lib,
        ...
      }: 
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            bun
						dprint
          ];
          nativeBuildInputs = with pkgs; [
            playwright
            playwright-driver.browsers
          ];

          PLAYWRIGHT_NODEJS_PATH = "${pkgs.nodejs}/bin/node";
          PLAYWRIGHT_BROWSERS_PATH = "${pkgs.playwright-driver.browsers}";
          PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true;
          PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = 1;
        };
      };
    };
}
