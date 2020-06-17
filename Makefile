.PHONY:	clean install start

install:
	npm ci

clean:
	rm -rf node_modules
	rm -rf lib
	mkdir ./lib
	mkdir ./lib/data

build: clean install
	npm run build

patch:
	npm version patch
	git add ./package.json
	git commit --no-status -m "Step up version"

deploy: build patch
	npm publish