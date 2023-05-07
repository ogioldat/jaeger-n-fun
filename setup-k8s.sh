# !/bin/bash

echo Setting default namespace
kubectl config set-context --current --namespace=jaeger-n-fun

echo Creating namespaces
kubectl create namespace jaeger-n-fun
kubectl create namespace observability

echo Installing cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml

echo Installing jaeger operator
kubectl create -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.44.0/jaeger-operator.yaml -n observability