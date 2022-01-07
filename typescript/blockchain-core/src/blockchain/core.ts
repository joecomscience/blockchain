import * as crypto from "crypto"
import { Block, Transaction } from "../types/types"

export default class Core {
    chain: Array<Block> = []
    penddingTransaction: Array<Transaction> = []

    constructor() {
        const genesisBlock: Block = this.createNewBlock(100, "0", "0")
        this.chain.push(genesisBlock)
    }

    createEmptyBlock(index: number, transactions: Array<Transaction> = []): Block {
        return {
            index: index + 1,
            timestamp: new Date(0),
            transactions,
            nonce: 0,
            hash: "",
            priviousBlockHash: ""
        }
    }

    createNewBlock(nonce: number, priviousBlockHash: string, hash: string) {
        const newBlock: Block = {
            index: this.chain.length + 1,
            timestamp: new Date(),
            transactions: this.penddingTransaction,
            nonce,
            hash,
            priviousBlockHash,
        }

        this.penddingTransaction = []
        this.chain.push(newBlock)
        return newBlock
    }

    getLastBlock(): Block {
        return this.chain[this.chain.length - 1]
    }

    createNewTransaction(sender: string, recipient: string, amount: number) {
        const newTransaction: Transaction = {
            sender,
            recipient,
            amount,
        }
        this.penddingTransaction.push(newTransaction)
        this.getLastBlock().index++
    }

    hashBlock(previousBlockHash: string, currentBlockData: Block, nonce: number) {
        const dataAsString = previousBlockHash + nonce + JSON.stringify(currentBlockData)
        return crypto.createHash("sha256").update(dataAsString).digest("hex")
    }

    proofOfWork(previousBlockHash: string, currentBlockData: Block, difficalty: number) {
        let nonce = 0
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)

        while (hash.substring(0, difficalty) !== Array(difficalty + 1).join("0")) {
            nonce++
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
        }
        return nonce
    }
}