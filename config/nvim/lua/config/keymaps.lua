-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
local map = LazyVim.safe_keymap_set

map("n", "<C-S-Up>", "<cmd>resize +2<cr>", { desc = "Increase Window Height" })
map("n", "<C-S-Down>", "<cmd>resize -2<cr>", { desc = "Decrease Window Height" })
map("n", "<C-S-Left>", "<cmd>vertical resize -2<cr>", { desc = "Decrease Window Width" })
map("n", "<C-S-Right>", "<cmd>vertical resize +2<cr>", { desc = "Increase Window Width" })

-- TODO: refactor this once I understand lua modules
-- hol' up cowboy
-- local function cowboy()
--   ---@type table?
--   local ids = {}
--   local ok = true
--   for _, key in ipairs({ "h", "j", "k", "l", "+", "-" }) do
--     ids[key] = nil
--     local count = 0
--     local timer = assert(vim.uv.new_timer())
--     local key_map = key
--     vim.keymap.set("n", key, function()
--       if vim.v.count > 0 then
--         count = 0
--       end
--       if count >= 20 and vim.bo.buftype ~= "nofile" then
--         if ids == nil then
--           return
--         end
--         local replace_id = ids[key]
--         ok, ids[key] = pcall(vim.notify, "Hold it Cowboy! Too much '" .. key .. "'!", vim.log.levels.WARN, {
--           icon = "🤠",
--           replace = replace_id,
--           keep = function()
--             return count >= 20
--           end,
--         })
--         if not ok then
--           ids[key] = nil
--           return key_map
--         end
--       else
--         count = count + 1
--         timer:start(2000, 0, function()
--           count = 0
--         end)
--         return key_map
--       end
--     end, { expr = true, silent = true })
--   end
-- end
-- cowboy()
