FROM php:8.2-apache

# 1. Cài các dependencies cần thiết
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    curl

# 2. Kích hoạt mod_rewrite cho Laravel route
RUN a2enmod rewrite

# 3. Cài các PHP extensions mà Laravel cần
RUN docker-php-ext-install pdo pdo_mysql zip

# 4. Thiết lập lại DocumentRoot của Apache về thư mục /public
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 5. Sao chép mã nguồn vào container (giả định Dockerfile cùng cấp với source code)
COPY . /var/www/html

# 6. Thiết lập thư mục làm việc
WORKDIR /var/www/html

# 7. Cài đặt Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 8. Cài các thư viện PHP (nếu cần)
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# 9. Cấp quyền cho Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
