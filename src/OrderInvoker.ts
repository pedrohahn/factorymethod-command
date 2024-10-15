// OrderInvoker.ts
import { Command } from './Command';

export class OrderInvoker {
  private command: Command | undefined;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    if (this.command) {
      this.command.execute();
    } else {
      console.log('Nenhum comando foi definido.');
    }
  }
}

/*
--- Command ----
O OrderInvoker é a classe que recebe um comando e o executa. Ele não precisa saber o que o comando faz, apenas que pode ser executado.

OrderInvoker armazena um comando (uma instância de uma classe que implementa Command) e tem um método executeCommand() para chamar o execute() do comando. 
Isso permite que a lógica de execução do pedido fique desacoplada do código que chama a execução.
*/
