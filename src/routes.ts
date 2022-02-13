import express, {Request} from "express"
import dayjs from "dayjs"
import cors from 'cors'
import { fetchByGeocode } from './services/GeoService'

const serverlessExpress = require("@vendia/serverless-express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/", async (_, res) => {
  res.json({ message: "Hello World"});
});

app.get('/geo', async(req, res) => {
  const options = {
    lat: '35.6769883',
    lng: '139.7588499',
    distance: 1000,
    limit: 50,
  }
  Object.assign(options, req.query)
  const ret = await fetchByGeocode(options)
  res.json({meta:{...options}, results: ret})
})

export const handler = serverlessExpress({ app });
