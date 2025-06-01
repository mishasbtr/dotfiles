-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
-- Add any additional autocmds here

local autocmd = vim.api.nvim_create_autocmd
local augroup = require("utils.augroup")

local function set_filetype_detector(detector)
  autocmd({ "BufReadPost", "BufNew" }, {
    group = augroup("personal-filetype-detectors"),
    pattern = { "*/i3/*/*config" },
    command = "setfiletype " .. detector.filetype,
  })
end

--- sets my filetype matchers
---@param matchers FiletypeMatcher[] matchers to apply
local function apply_filetype_matchers(matchers)
  for _, detector in ipairs(matchers) do
    set_filetype_detector(detector)
  end
end

---@class FiletypeMatcher
---@field pattern string[] List of patterns to match file paths
---@field filetype string The filetype to set for matched files

local i3_filetype_matcher = {
  pattern = { "*/i3/*/*config" },
  filetype = "i3",
}

local zim_filetype_matcher = {
  pattern = { "*/zim/*" },
  filetype = "zsh",
}

---@type FiletypeMatcher[]
local filetype_matchers = { i3_filetype_matcher, zim_filetype_matcher }
apply_filetype_matchers(filetype_matchers)
