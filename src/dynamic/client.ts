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

const client = new hello.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.sayHello({ name: 'you' }, function (err: any, response: any) {
  console.log('Greeting:', response.message);
});

client.sayWorld({ name: 'you' }, function (err: any, response: any) {
  console.log('Greeting:', response.message);
});
