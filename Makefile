.PHONY: bash build install git

bash:
	docker-compose exec display bash

build:
	docker-compose up -d --build

install:
	 docker-compose run --rm api yarn install

restart:
	docker-compose restart apima

git:
	git add .
	git commit -m "make file by command commit"
	git push -u origin master
