// package: hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayWorld: IGreeterService_ISayWorld;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloReply> {
    path: string; // "/hello.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloReply>;
}
interface IGreeterService_ISayWorld extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloReply> {
    path: string; // "/hello.Greeter/SayWorld"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloReply>;
    sayWorld: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayWorld(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayWorld(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayWorld(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayWorld(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayWorld(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayWorld(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
