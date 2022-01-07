import * as Koa from "koa"
import { uuid } from "uuidv4"
import Blockchain from "../blockchain/blockchain"
import Core from "../blockchain/core"
import Node from "../blockchain/node"
import { Block } from "../types/types"

const core: Core = new Core()
const node: Node = new Node()
const nodeId: string = uuid().split("-").join("")
const blockchain = new Blockchain(core, node)

export default class Controller {
    private difficalty: number = 2
    async Blockchain(ctx: Koa.Context) {
        ctx.body = blockchain
    }

    async Transaction(ctx: Koa.Context) { }

    async Mine(ctx: Koa.Context) {
        const { index, hash, transactions } = core.getLastBlock()
        const previousBlockHash = hash
        const currentBlockData = core.createEmptyBlock(index, transactions)
        const nonce = core.proofOfWork(previousBlockHash, currentBlockData, this.difficalty)
        const blockHash = core.hashBlock(previousBlockHash, currentBlockData, nonce)
        const newBlock = core.createNewBlock(nonce, previousBlockHash, blockHash)

        core.createNewTransaction("00", nodeId, 10)

        ctx.body = {
            note: "New Block mined successfully",
            block: newBlock
        }
    }
}