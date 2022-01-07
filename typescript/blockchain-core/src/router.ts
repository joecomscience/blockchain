import Router from "koa-router"
import Controller from "./controllers/blockchain_controllers"
import { Block } from "./types/types"

const router = new Router()
const crtl = new Controller()

router.get("/blockchain", crtl.Blockchain)
router.post("/transaction", crtl.Transaction)
router.get("/mine", crtl.Mine)
router.post("/register-and-boardcast-node", crtl.RegisterAndBoardcastNode)

router.post("/register-node", async (ctx: Koa.Context) => {
    const { newNodeUrl } = ctx.request.body
    node.addNewNode(newNodeUrl)
    ctx.body = { note: "New node register successfully" }
})

// router.post("/register-nodes-bulk", async (ctx: Koa.Context) => {

// })

export default router.routes()
