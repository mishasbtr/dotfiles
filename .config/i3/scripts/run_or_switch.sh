#!/bin/bash

APP_NAME=$1

if wmctrl -xl | grep -q $APP_NAME; then
    wmctrl -xa $APP_NAME
else
    i3-msg exec $APP_NAME
fi
