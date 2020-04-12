import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '/proto/hello.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const { hello } = grpc.loadPackageDefinition(packageDefinition) as any;

function sayHello(call: any, callback: any) {
  callback(null, { message: 'Hello ' + call.request.name });
}

function sayWorld(call: any, callback: any) {
  callback(null, { message: 'Hello again, ' + call.request.name });
}

const server = new grpc.Server();
server.addService(hello.Greeter.service, { sayHello, sayWorld });
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
