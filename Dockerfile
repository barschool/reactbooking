FROM httpd:alpine

COPY --chown=www-data:www-data ./build /usr/local/apache2/htdocs