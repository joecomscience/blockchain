import * as Koa from "koa"

export default class Controller {
    static async Blockchain(ctx: Koa.Context) {
        ctx.body = "hello"
    }

    static async Transaction(ctx: Koa.Context) { }

    static async Mine(ctx: Koa.Context) {

     }
}