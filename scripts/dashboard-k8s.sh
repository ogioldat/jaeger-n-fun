# !/bin/zsh

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

kubectl create token admin-user -n jaeger-n-fun | pbcopy

open http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/workloads?namespace=jaeger-n-fun

kubectl proxy -n jaeger-n-fun