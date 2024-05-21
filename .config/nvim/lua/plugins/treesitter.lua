return {
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed, {
      "angular",
      "astro",
      "cpp",
      "css",
      "csv",
      "scheme",
      "scss",
    })
  end,
}
