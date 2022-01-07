import Core from "./core"
import Node from "./node"

export default class Blockchain {
    private core: Core
    private node: Node

    constructor(core: Core, node: Node) {
        this.core = core
        this.node = node
    }

    get() {
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