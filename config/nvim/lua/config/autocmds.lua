-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

local autocmd = vim.api.nvim_create_autocmd
local augroup = require("utils.augroup").augroup

local function blameline_init()
  autocmd({ "BufEnter" }, {
    group = augroup("blameline"),
    pattern = { "*" },
    callback = function()
      vim.cmd("EnableBlameLine")
    end,
  })
end

local function i3_config_highlight_init()
  autocmd({ "BufReadPost", "BufNew" }, {
    group = augroup("i3config"),
    pattern = { "*/i3/*/*config" },
    callback = function()
      vim.bo.filetype = "i3config"
    end,
  })
end

blameline_init()
i3_config_highlight_init()
