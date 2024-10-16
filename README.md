# k8s-training
Project structure:
k8s-training/
├── nginx/
│   └── nginx.conf
├── website/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── Dockerfile
├── k8s/
│   ├── deployment.yml (containing both deployment and service)
│   └── kustomization.yml
└── README.md

## After configuring the Dockerfile and the nginx.conf files
In order to build my docker image in both architectures I run:
`docker buildx build --platform linux/amd64,linux/arm64 -t tassianna/k8s-training:nginx -f website/Dockerfile --push .`

> The -f flag allows to build my docker image on my root folder and allows me to copy both nginx.conf and index.html in my container without getting any erros.
> The --push flags pushes my image in my DockerHub directly.

`cd /k8s             # change to the kubernetes folder`
`kubectl apply -k .  # and apply the kustomization file`
`kubectl get services -o wide`
`web-loadbalancer   LoadBalancer   10.100.118.107   af05306d44df44551844feae6b55b9bf-1115482957.eu-west-2.elb.amazonaws.com   80:30000/TCP   10m    app=web`

