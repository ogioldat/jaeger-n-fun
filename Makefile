build:
	docker build --tag docker.io/ogioldat/nodejs:latest ./apps/node/
	docker push docker.io/ogioldat/nodejs:latest
	docker build --tag docker.io/ogioldat/py:latest ./apps/py/
	docker push docker.io/ogioldat/py:latest