return {
  {
    "ellisonleao/gruvbox.nvim",
    opts = {
      context = "hard",
      transparent_mode = true,
      overrides = {
        GitSignsCurrentLineBlame = { link = "GruvboxBlue" },
      },
    },
  },
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "gruvbox",
    },
  },
}
