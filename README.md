# Astrolab [![CircleCI](https://circleci.com/gh/10thfloor/astrolab/tree/master.svg?style=shield)](https://circleci.com/gh/10thfloor/astrolab/tree/master) [![Code Climate](https://codeclimate.com/github/10thfloor/astrolab/badges/gpa.svg)](https://codeclimate.com/github/10thfloor/astrolab)

### Meteor Dev & Deploy Framework using Google Cloud, Kubernetes, Helm, Docker & CircleCi

<span><img src="http://meteortips.com/assets/images/meteor-logo.png" width="100"></span>
<span><img src="http://doc.rultor.com/images/docker-logo.png" width="142"></span>
<span><img src="https://www.devintent.com/assets/google-cloud-logo-icon-128px.png" width="100"></span>
<span><img src="https://kubernetes.io/images/favicon.png" width="100"></span>
<span><img src="https://deis.com/assets/images/svg/helm-logo.svg" width="100"></span>
<span><img src="https://s3-us-west-2.amazonaws.com/assertible/integrations/circleci-logo.png" width="100"></span>

# Whats in the Box?

#### A modern Meteor App Starter
- Typescript + React + Redux
- React Storybook
- PostCSS & Styled components
- Server-Side Rendering (SSR)
- Apollo/Graphql/Graphiql
- Pre-configured Service Worker & Manifest for [PWA](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/)
- [Prometheus exporter](https://atmospherejs.com/sevki/prometheus-exporter)
- Pre-configured TSLint & CSSLint

#### An all-in-one Meteor deployment (and scaling) workflow:

- MongoDB Replicaset (3x, customizable) with Oplog
- Automatic HTTPS provisiioning via Let's Encrypt
- Pre-configured Nginx load-balancer with sticky-sessions
- 3x application instances (customizable)
- Pre-configured [Prometheus](https://prometheus.io/) & [Grafana](https://grafana.com/) installs for monitoring and alerting
- [Git crypt](https://github.com/AGWA/git-crypt) for secrets
- ✨*Automatic versioning & ```git push``` deploys using CircleCI & Docker*✨ 
- ✨*Install everything to Kubernetes on Google Cloud with one command, using* [Helm](https://docs.helm.sh/)✨


*Install Astrolab to Kubernetes:* ```helm install --namespace astrolab-production .``` <br/>
*Perform rolling updates to your deployment:* ```helm apply -f deployment.yaml```

*Using Kubernetes you can customize just about any aspect of this deploy, Kubernetes also handles deploy versioning and rollback and a host of other common production deployment tasks!*

---
#### Prerequisites:
1. Github account connected to [circle.ci](https://circleci.com/)
2. Register an account with [Google Cloud](https://cloud.google.com/) & install google cloud cli tools
3. Install the [Kubernetes cli tools (```kubectl```)](https://kubernetes.io/docs/tasks/tools/install-kubectl/) 
4. Install [Docker](https://docs.docker.com/engine/installation/) & register a [Docker Hub account](https://hub.docker.com/)
5. A Kubernetes cluster (see: Google Container Engine)

...to be continued
