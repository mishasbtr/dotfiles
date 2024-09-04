#!/bin/bash

if pgrep -u $UID -x polybar >/dev/null; then
  ~/.config/polybar/kill.sh
else
  ~/.config/polybar/launch.sh
fi
