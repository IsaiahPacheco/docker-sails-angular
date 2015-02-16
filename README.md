#Docker-sails-angular - Example use only

Currently I am in the process of building a platform for a hobby project and using it as an learning oppurtunity and test-bed of new ideas. This is not a active repository just a place to expose example code; it is a single dockerized application. In the active repository I am actively developing deployable container clusters for AWS using a Ghost Blog, Amazon RDS, custom app in Angular -> Polymer (migrating) and SailsJS.

##Mac
###Dependencies
- [Homebrew](http://brew.sh)(Optional)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
- [Install Boot2Docker](http://boot2docker.io) or $ brew install boot2docker
- [Install Tutum](https://tutum.freshdesk.com/support/solutions/articles/5000049209-installing-the-command-line-interface-tool) or $ brew install tutum
- Local Checkout of this repo.

###Local App

```
brew install node (or visit http://nodejs.org/ and follow installation)
npm -g install bower sails
npm install
bower install
sails lift

```

###Local Docker

```
boot2docker start

cd ~/path/to/docker-sails-angular

docker build --tag docker-sails-angular .

docker run -d -p 80:80 docker-sails-angular

boot2docker ip

//visit printed ip in browser

```

###production setup

*replace `tutum-username` with your username

```
tutum login

tutum image push demo

tutum service run -p 80:80/tcp --name demo tutum.co/tutum-username/docker-sails-angular

```

###status

```
docker ps

```

###terminating
*replace `uuid` with targeted container id

```
docker stop uuid
//OR
docker kill uuid

```