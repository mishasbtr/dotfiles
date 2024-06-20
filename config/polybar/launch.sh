#!/bin/bash
(
	flock 200

	kill -9 $(pgrep -f 'polybar') >/dev/null 2>&1

	polybar-msg cmd quit >/dev/null 2>&1

	# Wait until the processes have been shut down
	while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

	outputs=$(polybar --list-monitors | cut -d":" -f1)
	tray_output=eDP-1

	for m in $outputs; do
		export MONITOR=$m

		polybar --reload main </dev/null >/var/tmp/polybar-$m.log 2>&1 200>&- &
		disown
	done
) 200>/var/tmp/polybar-launch.lock

