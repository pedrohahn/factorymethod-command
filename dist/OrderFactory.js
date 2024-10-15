"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFactory = void 0;
class OrderFactory {
    showOrderDetails() {
        const order = this.createOrder();
        console.log(order.orderDetails());
    }
}
exports.OrderFactory = OrderFactory;
/*
--- Factory Method ---
Esse arquivo define a classe abstrata OrderFactory, que declara o método createOrder(), que deve ser implementado pelas fábricas específicas.

OrderFactory é uma classe abstrata que declara o método createOrder() (que será implementado nas fábricas concretas).
A classe também possui um método showOrderDetails() que cria um pedido e exibe seus detalhes, usando a fábrica específica.
*/
