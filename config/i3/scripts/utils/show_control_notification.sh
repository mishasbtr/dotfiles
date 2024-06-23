#!/bin/bash

readonly bar_color="#ebdbb2"
readonly show_duration=1000
readonly notification_id=2593

readonly icon=$1
readonly percentage=$2

dunstify -t $show_duration -r $notification_id -u normal "$icon  $percentage%" -h int:value:"$percentage" -h string:hlcolor:$bar_color
