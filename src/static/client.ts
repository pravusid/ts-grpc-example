import * as grpc from 'grpc';
import { GreeterClient } from './proto/hello_grpc_pb';
import { HelloRequest } from './proto/hello_pb';

const client = new GreeterClient('localhost:50051', grpc.credentials.createInsecure());

const request = new HelloRequest();
request.setName('라이언');

client.sayHello(request, function (err, response) {
  console.log('Greeting:', response.getMessage());
});

client.sayWorld(request, function (err, response) {
  console.log('Greeting:', response.getMessage());
});
