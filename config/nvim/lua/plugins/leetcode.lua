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
    { "<leader>i", "", desc = "+leet" },
    { "<leader>ig", "<cmd>Leet lang<cr>", desc = "Leet lang" },
    { "<leader>id", "<cma>Leet desc toggle<cr>", desc = "Leet desc toggle" },
    { "<leader>ih", "<cmd>Leet hints<cr>", desc = "Leet hints" },
    { "<leader>il", "<cmd>Leet list<cr>", desc = "Leet list" },
    { "<leader>ii", "<cmd>Leet<cr>", desc = "Leet" },
    { "<leader>ir", "<cmd>Leet run<cr>", desc = "Leet run" },
    { "<leader>is", "<cmd>Leet submit<cr>", desc = "Leet submit" },
  },
}
