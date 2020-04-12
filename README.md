# TypeScript + gRPC

TypeScript & gRPC example

<https://grpc.io/docs/quickstart/node/>

## Dynamic Code Generation

<https://www.npmjs.com/package/@grpc/proto-loader>

## Static Code Generation

- <https://github.com/grpc/grpc/tree/master/examples/node/static_codegen>
- <https://github.com/agreatfool/grpc_tools_node_protoc_ts>

`npm install grpc-tools grpc_tools_node_protoc_ts`

compile proto to js

```sh
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./src/proto \
  --grpc_out=./src/proto \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ./src/proto \
  ./src/proto/*.proto
```

compile js to d.ts

```sh
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=./src/proto \
  -I ./src/proto \
  ./src/proto/*.proto
```
