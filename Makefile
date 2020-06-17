.PHONY:	clean install start

install:
	npm ci

clean:
	rm -rf node_modules
	rm -rf lib

build: clean install
	npm run build

patch:
	npm version patch
	git add ./package.json
	git commit -n -m "Step up version"

deploy: build patch
	npm publish