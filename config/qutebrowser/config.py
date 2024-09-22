# type: ignore

from qutebrowser.config.configfiles import ConfigAPI
from qutebrowser.config.config import ConfigContainer

config: ConfigAPI = config  # noqa: F821
c: ConfigContainer = c  # noqa: F821

config.load_autoconfig(False)

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
c.window.hide_decoration = True

# general
c.auto_save.session = True
c.content.default_encoding = "utf-8"
c.content.blocking.method = "both"
c.content.javascript.clipboard = "access"
c.content.notifications.enabled = True
c.editor.command = ["alacritty", "-e", "nvim", "{}"]
c.fileselect.handler = "external"
c.fileselect.single_file.command = ["alacritty", "-e", "ranger", "--choosefile", "{}"]
c.fileselect.multiple_files.command = [
    "alacritty",
    "-e",
    "ranger",
    "--choosefiles",
    "{}",
]
c.downloads.location.prompt = True
c.tabs.show = "always"
c.tabs.last_close = "default-page"
c.tabs.width = "10%"
c.session.lazy_restore = True

# privacy
c.content.webrtc_ip_handling_policy = "default-public-interface-only"

# urls
c.url.searchengines = {
    "DEFAULT": "https://duckduckgo.com/?q={}",
    "aa": "https://annas-archive.org/search?q={}",
    "arch": "https://archlinux.org/packages/?q={}",
    "archwiki": "https://wiki.archlinux.org/?search={}",
    "aur": "https://aur.archlinux.org/packages?O=0&SeB=nd&K={}&outdated=&SB=p&SO=d&PP=50&submit=Go",
    "gentoo": "https://wiki.gentoo.org/index.php?title=Special%3ASearch&search={}&go=Go",
    "ggl": "https://google.com/search?q={}",
    "gh": "https://github.com/search?q={}&type=repositories",
    "ruwiki": "https://ru.wikipedia.org/w/index.php?search={}",
    "wiki": "https://en.wikipedia.org/w/index.php?search={}",
    "yt": "https://youtube.com/results?search_query={}",
}
c.url.default_page = "~/.config/qutebrowser/blank.html"
c.url.start_pages = ["~/.config/qutebrowser/blank.html"]


# keys
bindings = {
    "<Ctrl-Shift-J>": "tab-move +",
    "<Ctrl-Shift-K>": "tab-move -",
    "<Ctrl-Shift-PgUp>": "tab-move +",
    "<Ctrl-Shift-PgDown>": "tab-move -",
    "<Ctrl-R>": "config-cycle colors.webpage.darkmode.enabled True False",
    "<Ctrl-Shift-R>": "config-source",
    ",m": "spawn --detach mpv --force-window=immediate {url}",
    ",M": "hint links spawn --detach mpv --force-window=immediate {hint-url}",
    ",p": "spawn --userscript qute-bitwarden",
    "xt": "config-cycle tabs.show switching always",
    "xx": "config-cycle statusbar.show in-mode always ;; config-cycle tabs.show switching always",
    "xb": "config-cycle statusbar.show in-mode always",
}
for key, bind in bindings.items():
    config.bind(key, bind)
