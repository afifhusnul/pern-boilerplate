#!/bin/bash
baseFolder=/home/$USER/www/express-nextjs/pg-boilerplate
logFolder=/home/$USER/www/logs

# -d says not to attach to the session yet. top runs in the first
# window
#tmux new-session \; \split-window -v \; \split-window -h \; \select-pane -t 0 \; \split-window -h
#tmux new-session \; \split-window -h \; \select-pane -t 0 
#tmux new-session \; \split-window -h 
tmux new -d -s todoSession \; \split-window -h
tmux send-keys -t todoSession.0 "pm2 start $baseFolder/script/backend.sh" ENTER
tmux send-keys -t todoSession.1 "tail -f $logFolder/origin-access.log" ENTER
tmux a -t todoSession.0
