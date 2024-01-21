#!/bin/bash

get_max_brightness() {
	local result=$(qdbus org.kde.Solid.PowerManagement /org/kde/Solid/PowerManagement/Actions/BrightnessControl brightnessMax)
	echo "$result"
}

get_current_brightness() {
	local result=$(qdbus org.kde.Solid.PowerManagement /org/kde/Solid/PowerManagement/Actions/BrightnessControl brightness)
	echo "$result"
}

get_brightness_step() {
	local max_brightness=$(get_max_brightness)
	brightness_step=$(($max_brightness / 20))
	echo "$brightness_step"
}

get_increased_brightness() {
	local current_brightness=$(get_current_brightness)
	local increased_brightness=$(($current_brightness + $(get_brightness_step)))
	if [ $increased_brightness -ge $(get_max_brightness) ]; then
		increased_brightness=$(get_max_brightness)
	fi
	echo $increased_brightness
}

increase_brightness() {
	local increased_brightness=$(get_increased_brightness)
	qdbus org.kde.Solid.PowerManagement /org/kde/Solid/PowerManagement/Actions/BrightnessControl setBrightness $increased_brightness
}

get_decreased_brightness() {
	local current_brightness=$(get_current_brightness)
	local decreased_brightness=$(($current_brightness - $(get_brightness_step)))
	if [ $decreased_brightness -le 0 ]; then
		decreased_brightness=0
	fi
	echo $decreased_brightness
}

descrease_brightness() {
	local decreased_brightness=$(get_decreased_brightness)
	qdbus org.kde.Solid.PowerManagement /org/kde/Solid/PowerManagement/Actions/BrightnessControl setBrightness $decreased_brightness
}

case "$1" in
'increase')
	increase_brightness
	;;
'decrease')
	descrease_brightness
	;;
*)
	echo Wronte argument
	;;
esac
