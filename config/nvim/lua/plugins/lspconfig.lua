return {
  "neovim/nvim-lspconfig",
  ---@class PluginLspOpts
  opts_extend = {
    "servers.vtsls.settings.typescript.preferences.importModuleSpecifierPreference",
  },
  opts = {
    ---@type lspconfig.options
    servers = {
      mdx_analyzer = {},
      cssls = {},
      cssmodules_ls = {},
      somesass_ls = {},
      vtsls = {
        settings = {
          typescript = {
            preferences = {
              importModuleSpecifierPreference = "relative",
            },
          },
        },
      },
    },
  },
}
