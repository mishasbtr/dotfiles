local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  -- bootstrap lazy.nvim
  -- stylua: ignore
  vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable",
    lazypath })
end
vim.opt.rtp:prepend(vim.env.LAZY or lazypath)

local extrasBase = "lazyvim.plugins.extras."

local ai = extrasBase .. "ai."
local coding = extrasBase .. "coding."
local editor = extrasBase .. "editor."
local formatting = extrasBase .. "formatting."
local lang = extrasBase .. "lang."
local linting = extrasBase .. "linting."
local test = extrasBase .. "test."
local ui = extrasBase .. "ui."
local util = extrasBase .. "util."

require("lazy").setup({
  spec = {
    {
      "LazyVim/LazyVim",
      import = "lazyvim.plugins",
      opts = {
        colorscheme = "gruvbox",
      },
    },
    -- extras

    { import = ai .. "copilot" },
    { import = ai .. "copilot-chat" },
    { import = coding .. "mini-comment" },
    { import = coding .. "mini-surround" },
    { import = coding .. "yanky" },
    { import = editor .. "aerial" },
    { import = editor .. "harpoon2" },
    { import = editor .. "inc-rename" },
    { import = editor .. "mini-diff" },
    { import = editor .. "mini-files" },
    { import = editor .. "navic" },
    { import = editor .. "refactoring" },
    { import = formatting .. "black" },
    { import = formatting .. "prettier" },
    { import = lang .. "angular" },
    { import = lang .. "ansible" },
    { import = lang .. "astro" },
    { import = lang .. "clangd" },
    { import = lang .. "cmake" },
    { import = lang .. "docker" },
    { import = lang .. "java" },
    { import = lang .. "json" },
    { import = lang .. "markdown" },
    { import = lang .. "prisma" },
    { import = lang .. "python" },
    { import = lang .. "rust" },
    { import = lang .. "sql" },
    { import = lang .. "tailwind" },
    { import = lang .. "typescript" },
    { import = lang .. "yaml" },
    { import = lang .. "toml" },
    { import = linting .. "eslint" },
    { import = test .. "core" },
    { import = ui .. "mini-indentscope" },
    { import = ui .. "treesitter-context" },
    { import = util .. "dot" },
    { import = util .. "mini-hipatterns" },
    { import = util .. "project" },

    -- end of extras
    { import = "plugins" },
  },
  defaults = {
    lazy = false,
    version = false,
  },
  install = { colorscheme = { "gruvbox" } },
  checker = { enabled = true }, -- automatically check for plugin updates
  performance = {
    rtp = {
      -- disable some rtp plugins
      disabled_plugins = {
        "gzip",
        -- "matchit",
        -- "matchparen",
        -- "netrwPlugin",
        "tarPlugin",
        "tohtml",
        "tutor",
        "zipPlugin",
      },
    },
  },
})
