import { config } from "dotenv";
config();

import fastify from "fastify";
console.log("Hi");
const app = fastify();
app.listen({ port: parseInt(process.env.PORT!) });
