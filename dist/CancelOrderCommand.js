"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelOrderCommand = void 0;
class CancelOrderCommand {
    constructor(order) {
        this.order = order;
    }
    execute() {
        if (!this.order.isConfirmed) {
            const orderType = this.order.type === 'Delivery' ? 'entrega' : 'retirada'; // Verifica o tipo do pedido
            console.log(`Não é possível cancelar o pedido de ${orderType}. Tipo do pedido: ${this.order.type}`);
            return;
        }
        const orderType = this.order.type === 'Delivery' ? 'entrega' : 'retirada'; // Verifica o tipo do pedido
        console.log(`Pedido de ${orderType} cancelado. Tipo do pedido: ${this.order.type}`);
        this.order.isConfirmed = false; // Redefine o estado
    }
}
exports.CancelOrderCommand = CancelOrderCommand;
/*
--- Command ---
Essa classe representa a ação de cancelar um pedido, também implementando a interface Command.

CancelOrderCommand também implementa Command e recebe um objeto Order no seu construtor. Quando execute() é chamado, ele executa a lógica de cancelamento do pedido.
*/ 
