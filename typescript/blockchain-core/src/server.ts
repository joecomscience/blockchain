import * as Koa from "koa"
import * as bodyparser from "koa-bodyparser"
import Blockchain from "./blockchain/blockchain"
import routes from "./router"

const port = process.argv[2] || 3000
const app = new Koa()

new Blockchain()

app.use(bodyparser())
app.use(routes)
app.listen(port, () => console.log(`server listening on port ${port}`))
