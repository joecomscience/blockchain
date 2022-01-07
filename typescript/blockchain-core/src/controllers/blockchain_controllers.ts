import * as Koa from "koa"
import { uuid } from "uuidv4"
import Blockchain from "../blockchain/blockchain"
import Core from "../blockchain/core"
import Node from "../blockchain/node"

const core: Core = new Core()
const node: Node = new Node()
const nodeId: string = uuid().split("-").join("")
const blockchain = new Blockchain(core, node)

export default class Controller {
    async Blockchain(ctx: Koa.Context) {
        ctx.body = blockchain
    }

    async Transaction(ctx: Koa.Context) { }

    async Mine(ctx: Koa.Context) {

    }
}