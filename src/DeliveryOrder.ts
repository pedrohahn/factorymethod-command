// DeliveryOrder.ts
import { Order } from './Order';

export class DeliveryOrder implements Order {
  type: string; // Essa propriedade deve ser pública
  isConfirmed: boolean;

  constructor() {
    this.type = 'Delivery';
    this.isConfirmed = false;
  }

  orderDetails(): string {
    return `Pedido para entrega. A comida será enviada para o endereço do cliente. Tipo: ${this.type}`;
  }
}


/*
--- Factory Method ---
DeliveryOrder é uma implementação concreta de Order, fornecendo uma descrição específica para pedidos de entrega. 
Quando orderDetails() é chamado, ele retorna uma mensagem indicando que o pedido é para entrega.
*/