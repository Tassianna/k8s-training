# k8s-training
Project structure: <br>
k8s-training/ <br>
├── nginx/ <br>
│   └── nginx.conf <br>
├── website/ <br>
│   ├── index.html <br>
│   ├── styles.css <br>
│   └── script.js <br>
├── Dockerfile <br>
├── k8s/ <br>
│   ├── nginx-deployment.yml (containing both deployment and service for frontend ) <br>
│   ├── backend-deployment.yml (containing both deployment and service for backend) <br>
│   ├── ingress.yml <br>
│   ├── namespace.yml <br>
│   └── kustomization.yml <br>
└── README.md <br>

## After configuring the Dockerfiles and the nginx.conf files
In order to build & push my docker images in both architectures I run: <br>
`docker buildx build --platform linux/amd64,linux/arm64 -t tassianna/k8s-training:frontend -f frontend/Dockerfile --push .` <br>
`docker buildx build --platform linux/amd64,linux/arm64 -t tassianna/k8s-training:backend -f backend/Dockerfile --push .` <br>

> The -f flag allows to build my docker image on my root folder and allows me to copy both nginx.conf and index.html in my container without getting any erros.
> The --push flags pushes my image in my DockerHub directly.

`cd /k8s             # change to the kubernetes folder` <br>
`kubectl apply -k .  # and apply the kustomization file` <br>
`kubectl get services -o wide --namespace frontend-ns` <br>
`web-loadbalancer   LoadBalancer   xxx.xxx.xxx.xxx   xxxxxxxx.eu-west-2.elb.amazonaws.com    80:30000/TCP   10m    app=web` <br>

## After switching to eks cluster
> Make sure that the ingress controller is installed:
`curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 > get_helm.sh` <br>
`chmod 700 get_helm.sh` <br>
`helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx` <br>
`helm repo update` <br>
`helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx \` <br>
  `--namespace ingress-nginx \` <br>
 ` --create-namespace` <br>
> Check if the controller is correctly installed:
`kubectl get ns` <br>




