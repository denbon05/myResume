install: install-deps

install-deps:
	npm ci

start:
	npm run start:dev

build:
	npm run build

lint:
	npx eslint .

fix:
	npx eslint --fix .

format:
	npx prettier --write .

.PHONY: test build