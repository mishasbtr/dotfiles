return {
  {
    "ellisonleao/gruvbox.nvim",
    priority = 1000,
    config = true,
    opts = function(_, opts)
      opts.context = "hard"
      opts.transparent_mode = true
      vim.o.background = "dark"
    end,
  },
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "gruvbox",
    },
  },
}
