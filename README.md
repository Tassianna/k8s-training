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

## After configuring the Dockerfile and the nginx.conf files
In order to build my docker image in both architectures I run: <br>
`docker buildx build --platform linux/amd64,linux/arm64 -t tassianna/k8s-training:nginx -f website/Dockerfile --push .` <br>

> The -f flag allows to build my docker image on my root folder and allows me to copy both nginx.conf and index.html in my container without getting any erros.
> The --push flags pushes my image in my DockerHub directly.

`cd /k8s             # change to the kubernetes folder` <br>
`kubectl apply -k .  # and apply the kustomization file` <br>
`kubectl get services -o wide --namespace frontend-ns` <br>
`web-loadbalancer   LoadBalancer   xxx.xxx.xxx.xxx   xxxxxxxx.eu-west-2.elb.amazonaws.com    80:30000/TCP   10m    app=web` <br>




