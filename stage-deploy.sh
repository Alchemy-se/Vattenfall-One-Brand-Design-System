#!/bin/bash

# Todo: Check that the configration exists
# If not, add it with
# gcloud init
# And name it "vattenfall-ds"

# gcloud config configurations list |grep vattenfall-ds | wc -l
gcloud config configurations activate vattenfall-ds

if [ ! -f ./conf/certs/digitaldesign.vattenfall.com.key ]; then
    echo "Private SSL key missing!"
    echo "Make sure you have the file digitaldesign.vattenfall.com.key in ./conf/certs"
    exit 1
fi

docker build --no-cache -t stage-vattenfallds --build-arg mode=dev -f stage.Dockerfile .
docker tag stage-vattenfallds eu.gcr.io/vattenfall-design-system/stage-vattenfallds
docker push eu.gcr.io/vattenfall-design-system/stage-vattenfallds

gcloud compute instances update-container stage-vf-docker-instance --container-image eu.gcr.io/vattenfall-design-system/stage-vattenfallds --zone europe-north1-a
gcloud compute instances reset stage-vf-docker-instance --zone europe-north1-a
