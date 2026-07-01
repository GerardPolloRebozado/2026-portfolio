{
  pkgs,
  lib,
  config,
  ...
}:
{
  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm = {
      enable = true;
      package = pkgs.pnpm;
    };
  };
  languages.typescript.enable = true;

  # https://devenv.sh/packages/
  packages = [
    pkgs.eslint
    pkgs.tailwindcss-language-server
    pkgs.vscode-langservers-extracted
    pkgs.yaml-language-server
    pkgs.vtsls
    pkgs.eslint
    pkgs.package-version-server
  ];

  dotenv.enable = true;
  # See full reference at https://devenv.sh/reference/options/
}
