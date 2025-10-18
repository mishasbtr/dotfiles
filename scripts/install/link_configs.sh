#!/bin/bash

cd

# Link zsh config
ln -s ~/dotfiles/.config/.zshrc ~/.zshrc
ln -s ~/dotfiles/.config/.p10k.zsh ~/.p10k.zsh

# Link tmux config
ln -s -f .tmux/.tmux.conf
ln -s ~/dotfiles/.config/.tmux.conf.local .tmux.conf.local

# Link configs directories
ln -s ~/dotfiles/i3 ~/.config/i3
ln -s ~/dotfiles/i3status ~/.config/i3status
ln -s ~/dotfiles/picom ~/.config/picom
ln -s ~/dotfiles/nvim ~/.config/nvim
