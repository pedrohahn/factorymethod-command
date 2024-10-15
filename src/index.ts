// index.ts
import { OrderInvoker } from './OrderInvoker';
import { ConfirmOrderCommand } from './ConfirmOrderCommand';
import { CancelOrderCommand } from './CancelOrderCommand';
import { DeliveryOrder } from './DeliveryOrder';
import { TakeoutOrder } from './TakeoutOrder';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const invoker = new OrderInvoker();

// Variáveis para armazenar as instâncias dos pedidos
let deliveryOrder: DeliveryOrder | null = null;
let takeoutOrder: TakeoutOrder | null = null;

function promptUser() {
  rl.question('Escolha uma opção (1: Confirmar Entrega, 2: Cancelar Entrega, 3: Confirmar Retirada, 4: Cancelar Retirada, 5: Sair): ', (answer) => {
    switch (answer) {
      case '1':
        if (!deliveryOrder) {
          deliveryOrder = new DeliveryOrder(); // Cria uma nova instância se não existir
        }
        invoker.setCommand(new ConfirmOrderCommand(deliveryOrder));
        invoker.executeCommand();
        break;
      case '2':
        if (!deliveryOrder) {
          console.log('Não há pedido de entrega para cancelar.');
          break;
        }
        invoker.setCommand(new CancelOrderCommand(deliveryOrder));
        invoker.executeCommand();
        break;
      case '3':
        if (!takeoutOrder) {
          takeoutOrder = new TakeoutOrder(); // Cria uma nova instância se não existir
        }
        invoker.setCommand(new ConfirmOrderCommand(takeoutOrder));
        invoker.executeCommand();
        break;
      case '4':
        if (!takeoutOrder) {
          console.log('Não há pedido de retirada para cancelar.');
          break;
        }
        invoker.setCommand(new CancelOrderCommand(takeoutOrder));
        invoker.executeCommand();
        break;
      case '5':
        rl.close();
        return;
      default:
        console.log('Opção inválida. Tente novamente.');
        break;
    }
    promptUser(); // Chama novamente para que o usuário escolha uma nova opção
  });
}

promptUser(); // Inicia o prompt do usuário


/*
--- Factory Method ---
index.ts é onde usamos as fábricas para criar pedidos e exibir os detalhes.

Aqui, instanciamos as fábricas de pedidos (DeliveryOrderFactory e TakeoutOrderFactory) e usamos showOrderDetails() 
para criar e exibir as informações dos pedidos.

--- Command ---
Esse arquivo é o ponto de entrada do sistema, onde criamos um pedido, instanciamos os comandos e usamos o OrderInvoker para executá-los.
Criamos uma instância de Order com o tipo de pedido (Delivery).
Criamos dois comandos: ConfirmOrderCommand e CancelOrderCommand, passando o pedido para cada um.
O OrderInvoker recebe os comandos usando setCommand() e os executa com executeCommand(), o que resulta nas mensagens de confirmação e cancelamento sendo exibidas.
*/

