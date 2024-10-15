// ConfirmOrderCommand.ts
import { Command } from './Command';
import { Order } from './Order';

export class ConfirmOrderCommand implements Command {
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  execute(): void {
    this.order.isConfirmed = true; // Atualiza o estado do pedido
    const orderType = this.order.type === 'Delivery' ? 'entrega' : 'retirada'; // Verifica o tipo do pedido
    console.log(`Pedido de ${orderType} confirmado. Tipo do pedido: ${this.order.type}`);
  }
}

/*
--- Command ---
ConfirmOrderCommand implementa Command e recebe um objeto Order como parâmetro no seu construtor. 
Quando execute() é chamado, ele executa a lógica de confirmação do pedido, mostrando a descrição do pedido.
*/
