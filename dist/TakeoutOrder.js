"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeoutOrder = void 0;
class TakeoutOrder {
    constructor() {
        this.type = 'Takeout';
        this.isConfirmed = false;
    }
    orderDetails() {
        return `Pedido para retirada. O cliente virá buscar a comida no restaurante. Tipo: ${this.type}`;
    }
}
exports.TakeoutOrder = TakeoutOrder;
/*
--- Factory Method ---
TakeoutOrder é outra implementação concreta de Order, mas para pedidos em que o cliente retira no balcão.
O método orderDetails() retorna uma mensagem adequada a esse tipo de pedido.
*/ 
