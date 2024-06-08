-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

-- setup blameline
local autocmd = vim.api.nvim_create_autocmd

local function augroup(name)
  return vim.api.nvim_create_augroup("misha-lazyvim_" .. name, { clear = true })
end

autocmd({ "BufEnter" }, {
  group = augroup("buf_enter"),
  pattern = { "*" },
  callback = function()
    vim.cmd("EnableBlameLine")
  end,
})
-- end of blameline stuff

-- highlight i3 configs
autocmd({ "BufReadPost", "BufNew" }, {
  group = augroup("buf_enter"),
  pattern = { "*/i3/*/*config" },
  callback = function()
    vim.bo.filetype = "i3config"
  end,
})
