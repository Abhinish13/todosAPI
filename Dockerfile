FROM registry.access.redhat.com/rhoar-nodejs/nodejs-10
USER root
COPY . /code
WORKDIR /code
EXPOSE 8000
RUN npm install
CMD ["npm","start"]

#Docker run command for This
#docker run \
#--name nodes1 \
#--link mysql:mysql \
#-e OPENSHIFT_MYSQL_HOST=172.17.0.2 \
#-e OPENSHIFT_MYSQL_USER=root \
#-e OPENSHIFT_MYSQL_PASSWORD=password \
#-e OPENSHIFT_MYSQL_DATABASE=todos \
#-itd  nodejs_api:v1
