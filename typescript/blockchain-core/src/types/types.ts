export type Block = {
    index: number,
    timestamp: Date,
    transactions: Array<Transaction>,
    nonce: number,
    hash: string,
    priviousBlockHash: string,
}

export type Transaction = {
    sender: string,
    recipient: string,
    amount: number,
}