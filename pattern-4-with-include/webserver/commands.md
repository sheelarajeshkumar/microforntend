npx mfserve --listen 3001 ./team-d   
npx mfserve --listen 3002 ./team-i
npx mfserve --listen 4000 ./static
❯ sudo nginx
cp microfrontend-labfiles/pattern-4-with-include/webserver/nginx.conf /usr/local/etc/nginx