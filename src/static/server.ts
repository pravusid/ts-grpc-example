import * as grpc from 'grpc';
import { GreeterService } from './proto/hello_grpc_pb';
import { HelloReply, HelloRequest } from './proto/hello_pb';

function sayHello(call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloReply>) {
  const reply = new HelloReply();
  reply.setMessage('Hello ' + call.request.getName());

  callback(null, reply);
}

function sayWorld(call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloReply>) {
  const reply = new HelloReply();
  reply.setMessage('Hello ' + call.request.getName());

  callback(null, reply);
}

const server = new grpc.Server();

server.addService(GreeterService, { sayHello, sayWorld });
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

console.log('listen port: 50051')
