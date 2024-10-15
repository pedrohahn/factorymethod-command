"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const OrderInvoker_1 = require("./OrderInvoker");
const ConfirmOrderCommand_1 = require("./ConfirmOrderCommand");
const CancelOrderCommand_1 = require("./CancelOrderCommand");
const DeliveryOrder_1 = require("./DeliveryOrder");
const TakeoutOrder_1 = require("./TakeoutOrder");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const invoker = new OrderInvoker_1.OrderInvoker();
// Variáveis para armazenar as instâncias dos pedidos
let deliveryOrder = null;
let takeoutOrder = null;
function promptUser() {
    rl.question('Escolha uma opção (1: Confirmar Entrega, 2: Cancelar Entrega, 3: Confirmar Retirada, 4: Cancelar Retirada, 5: Sair): ', (answer) => {
        switch (answer) {
            case '1':
                if (!deliveryOrder) {
                    deliveryOrder = new DeliveryOrder_1.DeliveryOrder(); // Cria uma nova instância se não existir
                }
                invoker.setCommand(new ConfirmOrderCommand_1.ConfirmOrderCommand(deliveryOrder));
                invoker.executeCommand();
                break;
            case '2':
                if (!deliveryOrder) {
                    console.log('Não há pedido de entrega para cancelar.');
                    break;
                }
                invoker.setCommand(new CancelOrderCommand_1.CancelOrderCommand(deliveryOrder));
                invoker.executeCommand();
                break;
            case '3':
                if (!takeoutOrder) {
                    takeoutOrder = new TakeoutOrder_1.TakeoutOrder(); // Cria uma nova instância se não existir
                }
                invoker.setCommand(new ConfirmOrderCommand_1.ConfirmOrderCommand(takeoutOrder));
                invoker.executeCommand();
                break;
            case '4':
                if (!takeoutOrder) {
                    console.log('Não há pedido de retirada para cancelar.');
                    break;
                }
                invoker.setCommand(new CancelOrderCommand_1.CancelOrderCommand(takeoutOrder));
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
