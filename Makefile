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
	git commit -m "Step up version"
	git push origin/master

deploy: build patch
	npm publish