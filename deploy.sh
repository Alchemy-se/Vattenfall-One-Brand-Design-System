#!/bin/bash

docker build -t vattenfallds .
docker tag vattenfallds eu.gcr.io/vattenfall-design-system/vattenfallds
docker push eu.gcr.io/vattenfall-design-system/vattenfallds

gcloud compute instances update-container vf-docker-instance --container-image eu.gcr.io/vattenfall-design-system/vattenfallds --zone europe-north1-a
gcloud compute instances reset vf-docker-instance --zone europe-north1-a