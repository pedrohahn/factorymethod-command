// TakeoutOrder.ts
import { Order } from './Order';

export class TakeoutOrder implements Order {
  type: string; // Essa propriedade deve ser pública
  isConfirmed: boolean;

  constructor() {
    this.type = 'Takeout';
    this.isConfirmed = false;
  }

  orderDetails(): string {
    return `Pedido para retirada. O cliente virá buscar a comida no restaurante. Tipo: ${this.type}`;
  }
}

/*
--- Factory Method ---
TakeoutOrder é outra implementação concreta de Order, mas para pedidos em que o cliente retira no balcão. 
O método orderDetails() retorna uma mensagem adequada a esse tipo de pedido.
*/