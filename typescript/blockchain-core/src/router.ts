import * as Koa from "koa"
import * as Router from "koa-router"
import { uuid } from "uuidv4"
import Controller from "./blockchain/controllers"
import Core from "./blockchain/core"
import Node from "./blockchain/node"
import { Block } from "./blockchain/types"

const nodeAddr = uuid().split("-").join("")
const router = new Router()
const core = new Core()
const node = new Node()

router.get("/test", async (ctx: Koa.Context) => {
    ctx.status = 200
    ctx.body = {"joewalker": "test"}
})
router.get("/blockchain", Controller.Blockchain)
router.post("/transaction", Controller.Transaction)
router.get("/mine", async (ctx: Koa.Context) => {
    const difficalty = 2
    const { index, hash, transactions } = core.getLastBlock()
    const previousBlockHash = hash
    const currentBlockData: Block = {
        index: index + 1,
        transactions
    }
    const nonce = core.proofOfWork(previousBlockHash, currentBlockData, difficalty)
    const blockHash = core.hashBlock(previousBlockHash, currentBlockData, nonce)
    const newBlock = core.createNewBlock(nonce, previousBlockHash, blockHash)


    core.createNewTransaction("00", nodeAddr, 10)

    ctx.body = {
        note: "New Block mined successfully",
        block: newBlock
    }
})

router.post("/register-and-boardcast-node", async (ctx: Koa.Context) => {
    const { newNodeUrl } = ctx.request.body
    node.addNewNode(newNodeUrl)

    try {
        await node.boardcastNode(newNodeUrl)
        ctx.body = { note: "Register new node successfully" }
    } catch (e) {
        ctx.status = 500
    }
})

router.post("/register-node", async (ctx: Koa.Context) => {
    const { newNodeUrl } = ctx.request.body
    node.addNewNode(newNodeUrl)
    ctx.body = { note: "New node register successfully" }
})

router.post("/register-nodes-bulk", async (ctx: Koa.Context) => {

})

export default router.routes()
