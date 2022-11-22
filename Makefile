MYSQL_PASSWORD=root
MYSQL_DATABASE=go_sample

.PHONY: mysql_cerate_db

mysql_cerate_db:
	docker-compose exec db mysql -u root --password=$(MYSQL_PASSWORD) -e "create database $(MYSQL_DATABASE)"
