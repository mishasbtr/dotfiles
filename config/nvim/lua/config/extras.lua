--- extras import factory
---@param prefix string
---@param names string[]
---@return table
local function e(prefix, names)
  local extras = {}
  for _, name in pairs(names) do
    extras[#extras + 1] = { import = "lazyvim.plugins.extras." .. prefix .. "." .. name }
  end
  return extras
end

return {
  e("ai", { "copilot", "copilot-chat" }),
  e("coding", { "mini-comment", "mini-surround", "yanky" }),
  e("editor", { "aerial", "harpoon2", "inc-rename", "mini-diff", "mini-files", "navic", "refactoring" }),
  e("formatting", { "black" }),
  e("lang", {
    "angular",
    "ansible",
    "astro",
    "clangd",
    "cmake",
    "docker",
    "java",
    "json",
    "markdown",
    "prisma",
    "python",
    "rust",
    "sql",
    "tailwind",
    "typescript",
    "yaml",
    "toml",
  }),
  e("linting", { "eslint" }),
  e("test", { "core" }),
  e("ui", { "mini-indentscope", "treesitter-context" }),
  e("util", { "dot", "mini-hipatterns", "project" }),
}
