--- Checks if lazy.nvim is installed.
--- Returns `true` if lazy.nvim is absent and needs to be installed.
---@param lazypath string
---@return boolean
local function check_lazyvim_needs_install(lazypath)
  local uv = (vim.uv or vim.loop)
  return not uv.fs_stat(lazypath)
end

local function init()
  local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
  if check_lazyvim_needs_install(lazypath) then
    require("utils.lazynviminstall").install_lazy_nvim(lazypath)
  end
  vim.opt.rtp:prepend(lazypath)
end

init()
