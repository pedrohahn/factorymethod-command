// OrderFactory.ts
import { Order } from './Order';

export abstract class OrderFactory {
  abstract createOrder(): Order;

  showOrderDetails(): void {
    const order = this.createOrder();
    console.log(order.orderDetails());
  }
}

/*
--- Factory Method ---
Esse arquivo define a classe abstrata OrderFactory, que declara o método createOrder(), que deve ser implementado pelas fábricas específicas.

OrderFactory é uma classe abstrata que declara o método createOrder() (que será implementado nas fábricas concretas). 
A classe também possui um método showOrderDetails() que cria um pedido e exibe seus detalhes, usando a fábrica específica.
*/
