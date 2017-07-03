# Astrolab [![CircleCI](https://circleci.com/gh/10thfloor/meteor-pwa-starter/tree/master.svg?style=shield)](https://circleci.com/gh/10thfloor/meteor-pwa-starter/tree/master) [![Code Climate](https://codeclimate.com/github/10thfloor/meteor-pwa-starter/badges/gpa.svg)](https://codeclimate.com/github/10thfloor/meteor-pwa-starter)

### Meteor Dev & Deploy Framework using Google Cloud, Kubernetes, Helm, Docker & CircleCi

<span><img src="http://meteortips.com/assets/images/meteor-logo.png" width="100"></span>
<span><img src="http://doc.rultor.com/images/docker-logo.png" width="142"></span>
<span><img src="https://www.devintent.com/assets/google-cloud-logo-icon-128px.png" width="100"></span>
<span><img src="https://kubernetes.io/images/favicon.png" width="100"></span>
<span><img src="https://deis.com/assets/images/svg/helm-logo.svg" width="100"></span>
<span><img src="https://s3-us-west-2.amazonaws.com/assertible/integrations/circleci-logo.png" width="100"></span>

# Whats in the Box?

#### A modern Meteor App Starter
- Typescript + React + Redux & Redux-Saga
- Apollo/Graphql/Graphiql
- React Storybook
- PostCSS & Styled components
- Pre-configured Service Worker & Manifest for [PWA](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/)
- [Prometheus exporter](https://atmospherejs.com/sevki/prometheus-exporter)
- Jest & Mocha/Chai
- Pre-configured TSLint & CSSLint

#### An all-in-one Meteor deployment (and scaling) workflow:
- MongoDB Replicaset (3x) with Oplog
- Automatic HTTPS provisiioning via Let's Encrypt
- Pre-configured Nginx load-balancer with sticky-sessions
- Pre-configured [Prometheus](https://prometheus.io/) & [Grafana](https://grafana.com/) installs for monitoring and alerting
- [Git crypt](https://github.com/AGWA/git-crypt) for secrets
- ✨*Automatic versioning & ```git push``` deploys using CircleCI & Docker*✨ 
- ✨*Install everything to Kubernetes on Google Cloud with one command, using* [Helm](https://docs.helm.sh/)✨



#### Prerequisites:
1. Github account connected to [circle.ci](https://circleci.com/)
2. Register an account with [Google Cloud](https://cloud.google.com/) & install google cloud cli tools
3. Install the [Kubernetes cli tools (```kubectl```)](https://kubernetes.io/docs/tasks/tools/install-kubectl/) 
4. Install [Docker](https://docs.docker.com/engine/installation/) & register a [Docker Hub account](https://hub.docker.com/)

---

MIT License

Copyright (c) 2017 Mackenzie Kieran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
