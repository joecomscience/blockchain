import Router from "koa-router"
import Controller from "./controllers/blockchain_controllers"
import { Block } from "./types/types"

const router = new Router()
const crtl = new Controller()

router.get("/blockchain", crtl.Blockchain)
router.post("/transaction", crtl.Transaction)
// router.get("/mine", async (ctx: Koa.Context) => {
//     const difficalty = 2
//     const { index, hash, transactions } = core.getLastBlock()
//     const previousBlockHash = hash
//     const currentBlockData: Block = {
//         index: index + 1,
//         transactions
//     }
//     const nonce = core.proofOfWork(previousBlockHash, currentBlockData, difficalty)
//     const blockHash = core.hashBlock(previousBlockHash, currentBlockData, nonce)
//     const newBlock = core.createNewBlock(nonce, previousBlockHash, blockHash)


//     core.createNewTransaction("00", nodeAddr, 10)

//     ctx.body = {
//         note: "New Block mined successfully",
//         block: newBlock
//     }
// })

// router.post("/register-and-boardcast-node", async (ctx: Koa.Context) => {
//     const { newNodeUrl } = ctx.request.body
//     node.addNewNode(newNodeUrl)

//     try {
//         await node.boardcastNode(newNodeUrl)
//         ctx.body = { note: "Register new node successfully" }
//     } catch (e) {
//         ctx.status = 500
//     }
// })

// router.post("/register-node", async (ctx: Koa.Context) => {
//     const { newNodeUrl } = ctx.request.body
//     node.addNewNode(newNodeUrl)
//     ctx.body = { note: "New node register successfully" }
// })

// router.post("/register-nodes-bulk", async (ctx: Koa.Context) => {

// })

export default router.routes()
