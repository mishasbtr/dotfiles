-- TODO: remove once https://github.com/LazyVim/LazyVim/pull/4345 is mreged
return {
  "conform.nvim",
  opts = function(_, opts)
    if LazyVim.has_extra("formatting.prettier") then
      opts.formatters_by_ft = opts.formatters_by_ft or {}
      opts.formatters_by_ft.htmlangular = { "prettier" }
    end
  end,
}
