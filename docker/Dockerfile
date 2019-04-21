FROM nginx:alpine

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

COPY docker/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY angular/dist .