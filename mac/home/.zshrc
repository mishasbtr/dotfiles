source /opt/homebrew/share/antigen/antigen.zsh

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle pip
antigen bundle node
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting

# Autocomplete
antigen bundle zsh-users/zsh-autosuggestions

# Tell Antigen that you're done.
antigen apply

# Aliases
alias gmm="gco master && gl && gco - && gm master --no-edit"
alias gmmp="gmm && gp"

# pnpm
export PNPM_HOME="/Users/svitlanazahorulko/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#a89984"

eval "$(starship init zsh)"
