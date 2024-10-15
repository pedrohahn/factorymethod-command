// Order.ts
export interface Order {
  type: string; // Esta propriedade deve ser pública
  isConfirmed: boolean; // Também deve ser pública
  orderDetails(): string; // Método deve ser público
}



/*
--- Factory Method ---
Esse arquivo define a interface Order, que será implementada pelos diferentes tipos de pedidos. 
A interface define um método que todos os pedidos precisam implementar.

A interface Order define um método orderDetails(), que retorna uma descrição do pedido. 
Qualquer classe que implementar essa interface precisa fornecer sua própria versão desse método.

--- Command ---
Essa classe representa um pedido no sistema e fornece um método para obter os detalhes do pedido. Pode ser usada tanto para pedidos de entrega quanto para retirada.

Order é uma classe que armazena informações sobre um pedido (neste caso, apenas o tipo do pedido). O método orderDetails() retorna uma descrição simples do pedido.
*/