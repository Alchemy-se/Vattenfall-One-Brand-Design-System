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

docker build --no-cache -t vattenfallds --build-arg mode=prod .
docker tag vattenfallds eu.gcr.io/vattenfall-design-system/vattenfallds
docker push eu.gcr.io/vattenfall-design-system/vattenfallds

gcloud compute instances update-container vf-docker-instance --container-image eu.gcr.io/vattenfall-design-system/vattenfallds --zone europe-north1-a
gcloud compute instances reset vf-docker-instance --zone europe-north1-a