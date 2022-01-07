import axios from "axios"
import { uuid } from "uuidv4"

export default class Node {
    url: string
    networkNodes: Array<string>
    nodeAddr: string

    constructor() {
        this.url = process.argv[3]
        this.networkNodes = []
        this.nodeAddr = uuid().split("-").join("")
    }

    addNewNode(newNodeUrl: string) {
        if (newNodeUrl === this.url) {
            console.info("Current node url is: " + newNodeUrl)
            return
        }
        if (this.networkNodes.find(url => url === newNodeUrl)) {
            console.info("Node already in the network!")
            return
        }
        this.networkNodes.push(newNodeUrl)
    }

    async boardcastNode(newNodeUrl: string) {
        const requests = this.networkNodes.map(url => {
            return axios.post(`${url}/register-node`, { newNodeUrl: url })
        })
        await Promise.all(requests)
        await axios.post(`${newNodeUrl}/register-nodes-bulk`, { networkNodes: this.networkNodes })
    }
}