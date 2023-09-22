# Layer 4 and Layer 7 Load Balancer

## Layer 4 Load Balancer

- Present in Layer 4 of the OSI Model.
- Does not have the ability to read data; therefore, no caching or data-related functions are available.
  - Since it doesn't have knowledge of the data, meaningful caching cannot be stored, and it would be a total waste.
- The LB (Load Balancer) just knows who the client is and where the server is, and it simply forwards our request while maintaining the same TCP connection.
- From the client to the Load Balancer (Reverse Proxy) and from there to the server, all with just one TCP connection.

## Layer 7 Load Balancer

- Present in Layer 7 of the OSI Model.
- As it resides on the Application Layer, L4 has the ability to view data and make decisions based on it.
  - For example, Ingress Nginx allows us to use a reverse proxy-type load balancer.
  - How? In Ingress Nginx, when a request (GET /comments) is received, our load balancer examines the request header to determine which server should receive the request.
  - How is caching done? Let's take a simple service, such as a country name and capital API.
    - We receive GET /country/xyz at the LB, and now we have information about which server the request is directed to. Here, we could use caching (e.g., Redis) to check if we have information about country XYZ saved and use it.
- Microservice Architecture can be used here.
- From the client to the Load Balancer (Reverse Proxy) with one TCP connection, and from there to the server, another TCP connection is established.

## Difference

- L4 is at Layer 3/4 of the OSI model, while L7 is at Layer 7 of the same model.
- L4 has one TCP connection, whereas L7 has two TCP connections.
- L7 has the ability to cache, whereas L4 doesn't have this capability.
- Examples include HAProxy and Nginx, which are both L4 and L7, while Ingress-Nginx is solely L7.
