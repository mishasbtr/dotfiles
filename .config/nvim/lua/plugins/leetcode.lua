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
    { "<leader>rl", "", desc = "+leet" },
    { "<leader>rla", "<cmd>Leet lang<cr>", desc = "Leet lang" },
    { "<leader>rlh", "<cmd>Leet hints<cr>", desc = "Leet hints" },
    { "<leader>rll", "<cmd>Leet list<cr>", desc = "Leet list" },
    { "<leader>rlo", "<cmd>Leet<cr>", desc = "Leet" },
    { "<leader>rlr", "<cmd>Leet run<cr>", desc = "Leet run" },
    { "<leader>rls", "<cmd>Leet submit<cr>", desc = "Leet submit" },
  },
}
