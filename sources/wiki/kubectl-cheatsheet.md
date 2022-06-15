---
title: kubectl cheatsheet
date: 2022-05-21
update-date: 2022-06-14
tags: devops
---

The thing that I always forget. I had even made a note about this and lost it 🙄

## Contexts

If there's more than 1 config/cluster in your machine

- `kubectl config current-context`
- `kubectl config get-contexts`
- [`kubectl config set-context`](https://jamesdefabia.github.io/docs/user-guide/kubectl/kubectl_config_set-context/)

I'm no expert to decide whether this is a good thing. I imagine that in a serious place/config one wouldn't be `kubectl`ing all the time (possibly never). But should still be needed from time to time. Especially for learning purposes.

## Getting what's inside

- `kubectl get X` where `X` could be `po`, `service`, `deploy`, `secret`, `ingress` and many more.
- pass `-n` to switch namespaces. I imagine that namespaces are a generally accepted good practice
- `kubectl rollout status <deployment>`. Not sure about the `<deployemnt>` part. Should be easy to look up in the docs tho
- `kubectl logs pod/<pod_name>` get logs IN POD. They (afaik) cannot be gotten from deployments. It's better to set up a logging stack
- restart a deployment with `kubectl rollout restart deploy/<deploy_name>`. Often needed when changing secrets/configmaps
- `kubectl exec -it pod/<pod_name> -- bash` run bash inside a pod. Don't use this. Don't abuse it. It' never a good idea
- `kubectl apply -f <manifest>` to apply a manifest. Good for setting up and pipelines. Actually not sure about the pipeline part, but does the job.
- `kubectl port-forward service/<service> <port_here>:<port_there>` to bind locally `<port_here>` to the service's `<port_there>`.
- create a namespace with `kubectl create namespace <name>`. Or just `apply -f` a manifest

## Some troubleshooting

- `minikube image load <local-image>` push a local image to minikube so that it can create pods with that image
- Getting `ImagePullBackoff`? run `kubectl describe <pod>` to see details

## Secrets

- `kubectl create secret docker-registry <secret_name> --docker-username=<user> --docker-password=<password> --docker-server=<server>`
- 👆 don't forget to set `imagePullSecrets` in your pod specs!
- `kubectl create secret generic <secret_name> --from-literal=<secret_key>=<secret_value>`. Might need to wrap some of these with double quotes. Repeat the `--from-literal` for more key-value pairs. **Include** the `--from-literal` each time a new pair is needed.

ghcr.io is particularly annoying because they want you to create a personal access token (which is account-bound) to pull images. Afaik, it cannot be repo-bound. Not too good 😕


## Stuff I couldn't find 👇

- creating a configmap from file
- everything about vcs and pvcs. I couldn't get myself to understand those in depth.
