#!/bin/bash
(
  flock 200
  pkill -9 polybar
) 200>/var/tmp/polybar-launch.lock
