return {
  "kawre/leetcode.nvim",
  build = ":TSUpdate html",
  dependencies = {
    "nvim-telescope/telescope.nvim",
    "nvim-lua/plenary.nvim", -- required by telescope
    "MunifTanjim/nui.nvim",

    -- optional
    "nvim-treesitter/nvim-treesitter",
    "rcarriga/nvim-notify",
    "nvim-tree/nvim-web-devicons",
  },
  opts = {
    lang = "javascript",
  },
  cmd = { "Leet" },
  keys = {
    { "<leader>rll", "<cmd>Leet list<cr>",   desc = "Leet list" },
    { "<leader>rlr", "<cmd>Leet run<cr>",    desc = "Leet run" },
    { "<leader>rls", "<cmd>Leet submit<cr>", desc = "Leet submit" },
    { "<leader>rlh", "<cmd>Leet hints<cr>",  desc = "Leet hints" },
  },
}
