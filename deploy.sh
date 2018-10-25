#!/bin/bash

# Todo: Check that the configration exists
# If not, add it with 
# gcloud init
# And name it "vattenfall-ds"

# gcloud config configurations list |grep vattenfall-ds | wc -l
gcloud config configurations activate vattenfall-ds

docker build -t vattenfallds .
docker tag vattenfallds eu.gcr.io/vattenfall-design-system/vattenfallds
docker push eu.gcr.io/vattenfall-design-system/vattenfallds

gcloud compute instances update-container vf-docker-instance --container-image eu.gcr.io/vattenfall-design-system/vattenfallds --zone europe-north1-a
gcloud compute instances reset vf-docker-instance --zone europe-north1-a