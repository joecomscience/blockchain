import Core from "./core"
import Node from "./node"

export default class Blockchain {
    private core: Core
    private node: Node

    constructor() {
        this.core = new Core()
        this.node = new Node()
    }

    getInfo() {
        return {
            chain: this.core.chain,
            peddingTransaction: this.core.penddingTransaction,
            nodeUrl: this.node.url,
            networkNodes: this.node.networkNodes
        }
    }

    getCoreInstance() {
        return this.core
    }

    getNodeInstance() {
        return this.node
    }
}