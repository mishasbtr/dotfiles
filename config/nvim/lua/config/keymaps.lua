-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
local map = LazyVim.safe_keymap_set

map("n", "<C-S-Up>", "<cmd>resize +2<cr>", { desc = "Increase Window Height" })
map("n", "<C-S-Down>", "<cmd>resize -2<cr>", { desc = "Decrease Window Height" })
map("n", "<C-S-Left>", "<cmd>vertical resize -2<cr>", { desc = "Decrease Window Width" })
map("n", "<C-S-Right>", "<cmd>vertical resize +2<cr>", { desc = "Increase Window Width" })

map("n", "<leader>cp", function()
  vim.fn.setreg("+", vim.fn.expand("%"))
  print("Copied relative path: " .. vim.fn.expand("%"))
end, { noremap = true, silent = true, desc = "Copy Relative Path of Active File" })

map("n", "<leader>fw", function()
  LazyVim.pick("files", { default_text = vim.fn.expand("<cword>") })()
end, { desc = "Find Files (Current word)" })
