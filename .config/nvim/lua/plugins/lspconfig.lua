return {
  "neovim/nvim-lspconfig",
  ---@class PluginLspOpts
  opts = {
    ---@type lspconfig.options
    servers = {
      angularls = {},
      mdx_analyzer = {},
      cssls = {},
      cssmodules_ls = {},
      somesass_ls = {},
    },
  },
}
