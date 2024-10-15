"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrder = void 0;
class DeliveryOrder {
    constructor() {
        this.type = 'Delivery';
        this.isConfirmed = false;
    }
    orderDetails() {
        return `Pedido para entrega. A comida será enviada para o endereço do cliente. Tipo: ${this.type}`;
    }
}
exports.DeliveryOrder = DeliveryOrder;
/*
--- Factory Method ---
DeliveryOrder é uma implementação concreta de Order, fornecendo uma descrição específica para pedidos de entrega.
Quando orderDetails() é chamado, ele retorna uma mensagem indicando que o pedido é para entrega.
*/ 
