# microservicesAndRedis
Service1 is a standalone project which has it's own mathService and has no splitting between microservice
Service2 is basically the microservice project that holds services such as mathService containing business logic that can be utlilized by any client who gets connected to this microservice
Service3 is a client that recieves an http request like from postman or axios and redirects to a microservice to get the response from some service that holds business logic so that client will get the result for the request he got and then it will return the result as a response to the requesting side.
