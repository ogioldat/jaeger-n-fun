release-all:
	docker build --tag docker.io/ogioldat/nodejs:latest ./apps/nodejs/
	docker push docker.io/ogioldat/nodejs:latest
	docker build --tag docker.io/ogioldat/py:latest ./apps/py/
	docker push docker.io/ogioldat/py:latest

release:
	docker build --tag docker.io/ogioldat/$(APP):latest ./apps/$(APP)/
	docker push docker.io/ogioldat/$(APP):latest
