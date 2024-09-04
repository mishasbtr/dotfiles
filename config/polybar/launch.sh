#!/bin/bash

~/.config/polybar/kill.sh

(
  flock 200

  while pgrep -u $UID -x polybar >/dev/null; do sleep 0.5; done

  outputs=$(polybar --list-monitors | cut -d":" -f1)

  for m in $outputs; do
    export MONITOR=$m

    polybar --reload main </dev/null >/var/tmp/polybar-$m.log 2>&1 200>&- &
    disown
  done
) 200>/var/tmp/polybar-launch.lock
