const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const host = process.env.MONGO_HOST
const database = process.env.MONGO_DATABASE
const port = process.env.PORT
const mongoConnectUri = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
const webhookUrl = process.env.SLACK_WEBHOOK_URL || ''

export { mongoConnectUri, port, webhookUrl }
