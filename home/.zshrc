source /usr/share/zsh/share/antigen.zsh

# Load oh-my-zsh library.

antigen use oh-my-zsh

# Load bundles from the default repo (oh-my-zsh).

antigen bundle git
antigen bundle command-not-found

# Load bundles from external repos.

antigen bundle zsh-users/zsh-completions
antigen bundle zsh-users/zsh-autosuggestions
antigen bundle zsh-users/zsh-syntax-highlighting

antigen apply

# set theme to gruvbox dark
export GTK_THEME=Gruvbox-Dark-BL-LB:dark

export VISUAL=nvim
export EDITOR=nvim
export TERMINAL=alacritty

# setup autosuggestions color
export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#a89984"

export ASDF_DATA_DIR="$HOME/.asdf"
export PATH="$ASDF_DATA_DIR/shims:$PATH"

eval "$(starship init zsh)"

# aliases
alias gmm="gcm && gl && gco - && gm -"
alias gmmp="gmm && gp"

