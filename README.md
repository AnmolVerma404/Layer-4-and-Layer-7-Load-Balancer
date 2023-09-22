# Layer 4 and Layer 7 Load Balancer

## Layer 4 Load Balancer

- Present in Layer 4 os OSI Model
- Do not have the ability to read data, therefore no caching and data related suff.
  - Since we don't know the data no meaningfull cache can be stored and it will be total wastage.
- The LB just know who the client is and where are the server and it just forward our request with maintaining the same TCP connection.
- From Cliend to Load Balancer (Reverse Proxy) and from there to server, with just one TCP connection

## Layer 7 Load Balancer

- Present in Layer 7 os OSI Model
- As present on Application Layer L4 have the ability to view data and take decision based on it.
  - Eg Ingress Nginx, which allows us to use a reverse proxy kind of load balancer.
  - How? In Ingress Nginx request (GET /comments) comes and our load balancer view the request header from that LB know which server should recieve the request.
  - How caching is done? Let's take a simple service i.e. country name and capital API
    - We recieve GET /country/xyz LB now have info about which server is request directed for, here we could use a caching (eg redis) and check if we have country xyz info saved and use it.
- From Cliend to Load Balancer (Reverse Proxy) with one TCP connection and from there to server another TCP connection.

## Difference

    - L4 have one TCP connection whereas L7 has two TCP connection
