# OOSE DEA Vodagone 

This repository contains a front-end for the final programming assignment 
of the course OOSE-DEA at the [HAN University of Applied Sciences](https://www.han.nl/).

## Hosted version

Use this version if you do not want to install it locally:

-- ADD HERE AS SOON AS ONE IS AVAILABLE

## Enabling CORS headers in your JavaEE container

To use this Vodagone Client with your own Vodagone Server, you will need to enable CORS headers
in your JavaEE container. 

This is required because the Client is served from a different domain than the Server. Your browser will only allow this if the Server has the CORS Headers set in its HTTP response.

To enable this, follow the steps below.

* Ensure that you understand the _why_. For instance, read: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
* Figure out how to perform the _how_. There are several ways with JavaEE and there are many resources available online. 
 
## API

In general the API must conform the standards of a RESTFull API. It will use HTTP methods and expects HTTP statuscodes in its response.

### Methods used 

* GET : In case of acquiring one, or multiple resources.
* POST: In case of creating a resource.
* PUT: In case of modifying  a resource.
* DELETE: In case of deleting a resource.

### Response codes

The client will expect the following respond codes to be used

* 200: OK. A response to a successful GET, PUT or DELETE.
* 201: Resource has been created. A response to a successful POST.
* 400: Bad Request. Something is wrong with the request. This could be due to
a missing query-parameter for the token.
* 401: Unauthorized. Authorization has failed. This can happen if the user tried to log in, but supplied an invalid username/password.
* 403: Forbidden. The request was valid, but you have requested a resource for which are not authorized. This will probably mean you have provided a token that is invalid.
* 404: Not found. You have requested an endpoint that is not available.

### HATEOAS

Those that are aware of the concept HATEOAS might notice that this API is not HATEOAS. That is not a problem, HATEOAS is not within the scope of this excercise.

### Endpoints
The following endpoints are expected

#### Login

```
url:    /login 
method: POST
```

It will perform a request with an object in the body of the form

```
{
  "user":     "meron", 
  "password": "MySuperSecretPassword12341"
}
```

It will expect a response containing an object of the form

```
{
  "token":  "1234-1234-1234", 
  "user":   "Meron Brouwer"
}
```

This token is then stored in LocalStorage and used for each following
request.
