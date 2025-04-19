## Setup

On the host system:

1. `git clone https://github.com/practisec/express-authz-test.git`

1. `cd express-authz-test`

1. `docker run --rm -it -p 9000:3000 -v ${PWD}:/src node:alpine /bin/sh`

In the container:

1. `cd /src`

1. `npm install`

1. `npm start`

In a browser:

1. Visit http://localhost:9000.

## Users

email: "abc@gmail.com"    
password: "password"    
role: "user"

email: "admin@gmail.com"    
password: "password"    
role: "admin"
