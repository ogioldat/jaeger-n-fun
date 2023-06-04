# !/bin/zsh

kubectl port-forward -n jaeger-n-fun $(kubectl get pods -n jaeger-n-fun -l=app="jaeger" -o name) 16686:16686

open http://localhost:16686/