import Koa from "koa"
import bodyparser from "koa-bodyparser"
import routes from "./router"

const port = process.argv[2] || 3000
const app = new Koa()

app.use(bodyparser())
app.use(routes)
app.listen(port, () => console.log(`server listening on port ${port}`))
