"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmOrderCommand = void 0;
class ConfirmOrderCommand {
    constructor(order) {
        this.order = order;
    }
    execute() {
        this.order.isConfirmed = true; // Atualiza o estado do pedido
        const orderType = this.order.type === 'Delivery' ? 'entrega' : 'retirada'; // Verifica o tipo do pedido
        console.log(`Pedido de ${orderType} confirmado. Tipo do pedido: ${this.order.type}`);
    }
}
exports.ConfirmOrderCommand = ConfirmOrderCommand;
/*
--- Command ---
ConfirmOrderCommand implementa Command e recebe um objeto Order como parâmetro no seu construtor.
Quando execute() é chamado, ele executa a lógica de confirmação do pedido, mostrando a descrição do pedido.
*/
