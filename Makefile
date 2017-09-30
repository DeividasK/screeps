default: types test build

build:
	yarn webpack --config internals/webpack.config.js

types:
	yarn flow

test:
	yarn jest --coverage

test_watch:
	yarn jest --watch
