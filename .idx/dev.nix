{ pkgs, ... }:
{
  channel = "unstable";

  packages = [ pkgs.bun ];

  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "bun"
          "dev"
        ];
        manager = "web";
        id = "web";
      }
    ];
  };
}
