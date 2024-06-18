config.load_autoconfig(True)

# ui
config.source("gruvbox.py")
c.colors.webpage.darkmode.enabled = True
c.completion.shrink = True
c.completion.use_best_match = True
c.downloads.remove_finished = 10000
c.statusbar.widgets = ["progress", "keypress", "url", "history"]
c.tabs.position = "left"
c.tabs.title.format = "{index}: {audio}{current_title}"
c.tabs.title.format_pinned = "{index}: {audio}{current_title}"

# general
c.auto_save.session = True
c.content.default_encoding = "utf-8"
c.content.blocking.method = "both"
c.content.javascript.clipboard = "access"
c.content.notifications.enabled = True
c.editor.command = ["alacritty", "nvim", "-e", "exec {line}g{column0}l", "{}"]
c.fileselect.handler = "external"
c.fileselect.single_file.command = ["alacritty", "sh", "-c", "xplr > {}"]
c.fileselect.multiple_files.command = ["alacritty", "sh", "-c", "xplr > {}"]
c.downloads.location.prompt = True
c.tabs.show = "multiple"
c.tabs.last_close = "close"

# privacy
c.content.cookies.accept = "no-3rdparty"
c.content.webrtc_ip_handling_policy = "default-public-interface-only"

# urls
c.url.searchengines = {
    "DEFAULT": "https://google.com/search?q={}",
    "?": "https://google.com/search?q={}",
}
c.url.default_page = "~/.config/qutebrowser/blank.html"
c.url.start_pages = ["~/.config/qutebrowser/blank.html"]


# keys
bindings = {
    "<Ctrl-Shift-J>": "tab-move +",
    "<Ctrl-Shift-K>": "tab-move -",
    ",m": "hint links spawn --detach mpv --force-window=immediate {hint-url}",
    "D": "undo",
    ",p": "spawn --userscript qute-bitwarden",
}

for key, bind in bindings.items():
    config.bind(key, bind)
