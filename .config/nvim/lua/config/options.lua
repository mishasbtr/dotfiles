-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here

vim.opt.clipboard = ""
vim.g.camelcasemotion_key = "\\"
vim.o.termguicolors = true

-- setup treesitter for angular
vim.filetype.add({
  pattern = {
    [".*%.component%.html"] = "angular.html",
    [".*%.container%.html"] = "angular.html",
  },
})
