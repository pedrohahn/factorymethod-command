// CancelOrderCommand.ts
import { Command } from './Command';
import { Order } from './Order';

export class CancelOrderCommand implements Command {
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  execute(): void {
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




/*
--- Command ---
Essa classe representa a ação de cancelar um pedido, também implementando a interface Command.

CancelOrderCommand também implementa Command e recebe um objeto Order no seu construtor. Quando execute() é chamado, ele executa a lógica de cancelamento do pedido.
*/