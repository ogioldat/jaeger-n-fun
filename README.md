# jaeger-n-fun
Bare minimum k8s app to demonstrate core concepts of jaeger

### Prerequisites

1. Existing k8s namespace `jaeger-n-fun`

2. `cert-manager` installed 
    ```bash
    kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
    ```