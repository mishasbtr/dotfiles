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

# pyenv configuration
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# pnpm
export PNPM_HOME="/home/misha/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

export VISUAL=nvim
export EDITOR=nvim
export TERMINAL=alacritty

# setup autosuggestions color
export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#d65d0e"


eval "$(starship init zsh)"
