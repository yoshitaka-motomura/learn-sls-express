import express, { json } from "express";
import dayjs from "dayjs"
const serverlessExpress = require("@vendia/serverless-express");
const app = express();

app.use(json());

app.get("/", async (_, res) => {
  return res.json({ message: "Hello World" , version: process.env.APP_VERSION});
});

app.get('/test', async(_, res) => {
  const name = process.env.APP_NAME || 'World'
  return res.json({ message: name, time: dayjs().unix() });
})

export const handler = serverlessExpress({ app });
