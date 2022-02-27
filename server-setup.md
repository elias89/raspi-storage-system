Check Debian version

> cat /etc/debian_version

Install nginx for that Debian version'

> sudo apt update
> sudo apt install nginx
> systemctl status nginx

Setup sample site

> sudo mkdir -p /var/www/rss/html
> sudo chown $USER:$USER /var/www/rss/html
> vi /var/www/rss/html/index.html

Configure server block
> vi /etc/nginx/sites-available/rss
> sudo ln /etc/nginx/sites-available/rss /etc/nginx/sites-enabled/
