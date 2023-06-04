# jaeger-n-fun
Bare minimum app to demonstrate core concepts of jaeger. Either use K8s or docker compose.

### Prerequisites

1. Existing k8s namespace `jaeger-n-fun`

2. `cert-manager` installed 
    ```bash
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
    ```

### Jaeger UI

```bash
kubectl port-forward $(kubectl get pods -l=app="jaeger" -o name) 16686:16686
```

### Dashboard

```bash
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login
```

### Run dashboard

If needed

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml`

Proxy

`kubectl proxy -n jaeger-n-fun`

[Link to dashboard](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/workloads?namespace=jaeger-n-fun)