# Changelog
Summary of release changes

## 0.0.4
- The app was tested on Google Container Engine and the Helm install works! (With HTTPS)!
- The cluster should be created manually, and Firewall rules must be set manually as well.

## 0.0.3
- The App, Database & Monitoring tools can now be deployed to a Kubernetes cluster using a custom Helm Chart! 🤘
- Helm Chart includes Nginx Ingress Controller for Meteor app & Grafana dashboard.
- An initial Grafana dashboard config has been created with deploy specific metrics for your Meteor app.


## 0.0.2 
- CircleCi will now deploy the Meteor Docker image tagged with the latest tag from master.

## 0.0.1 
- Started semver tagging.
