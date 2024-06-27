return {
  "neovim/nvim-lspconfig",
  ---@class PluginLspOpts
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
              importModuleSpecifier = "relative",
            },
          },
        },
      },
    },
  },
}
