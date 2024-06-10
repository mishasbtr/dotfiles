#!/bin/bash

xtime="_NET_WM_USER_TIME"

# Escape arguments
qargv=()
for arg in "$@"; do
	qargv+=("$(printf '%q' "$arg")")
done

# Search for visible windows matching the criteria
ids=$(xdotool search "${qargv[@]}")
max_time_id=""
max_time=0

# Iterate through each window ID
while read -r id; do
	time=$(xprop -id "$id" "$xtime" | awk -F '=' '{print $2}' | tr -d ' ')

	if [[ -z "$max_time_id" || $time -gt $max_time ]]; then
		max_time=$time
		max_time_id=$id
	fi
done <<<"$ids"

if [[ -z "$max_time_id" ]]; then
	exit 1
fi

i3-msg "[id=$max_time_id] focus"
exit $?
