ZIM_HOME=~/.zim
ZIM_CONFIG_FILE=~/.config/zsh/zimrc

if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
  if (( ${+commands[curl]} )); then
    curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
        https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
  else
    mkdir -p ${ZIM_HOME} && wget -nv -O ${ZIM_HOME}/zimfw.zsh \
        https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
  fi
fi
# Install missing modules, and update ${ZIM_HOME}/init.zsh if missing or outdated.
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZIM_CONFIG_FILE:-${ZDOTDIR:-${HOME}}/.zimrc} ]]; then
  source ${ZIM_HOME}/zimfw.zsh init -q
fi
# Initialize modules.
source ${ZIM_HOME}/init.zsh

# set environment variables
export GTK_THEME=Gruvbox-Dark-BL-LB:dark
export VISUAL=nvim
export EDITOR=nvim

export TERMINAL=alacritty
export PATH=$PATH:~/.asdf/installs/nodejs/22.14.0/bin

[ -f ~/keys.sh ] && source ~/keys.sh

# aliases
alias gmm="gcm && gl && gco - && gm -"
alias gmmp="gmm && gp"

bindkey -e
