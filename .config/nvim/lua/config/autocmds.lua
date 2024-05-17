-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

-- all this stuff is needed for blameline to work
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
