#Docker-sails-angular (not working in current state)

Currently I am in the process of building a platform for a hobby project and using it as an learning oppurtunity and test-bed of new ideas. This is not a active repository just a place to expose example code.



##Mac
###Dependencies
- [Homebrew](http://brew.sh)(Optional)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
- [Install Boot2Docker](http://boot2docker.io) or $ brew install boot2docker
- [Install Tutum](https://tutum.freshdesk.com/support/solutions/articles/5000049209-installing-the-command-line-interface-tool) or $ brew install tutum
- Local Checkout of this repo.

###Local Setup

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

tutum image push lnems

tutum service run -p 80:80/tcp --name lnems tutum.co/tutum-username/docker-sails-angular

```

###status

```
// view service process status
tutum service ps

// view container process status
tutum container ps

```

###terminating
*replace `uuid` with targeted container id

```
tutum service ps

docker stop uuid

```