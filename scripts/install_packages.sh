#!/bin/bash

# Install yay
# install dependencies
sudo pacman -S --needed --noconfirm git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
# Clean up
cd ..
rm -rf yay

# install packages
yay -S --needed --noconfirm - <../packages/pkglist.txt
