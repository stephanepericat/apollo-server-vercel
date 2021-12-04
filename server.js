// import { ApolloServer } from 'apollo-server-express';
// import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
// import http from "http";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(cookieParser());

app.use("*", (req, res) => {
  res.json({ ok: true, method: req.method });
});

export default app;
