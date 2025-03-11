local function misha_lazyvim_augroup(name)
  return vim.api.nvim_create_augroup("misha-lazyvim_" .. name, { clear = true })
end

return {
  augroup = misha_lazyvim_augroup,
}
