// Command.ts
export interface Command {
    execute(): void;
  }
  

/*
--- Command ---
Esse arquivo define a interface Command, que todos os comandos no sistema precisam implementar. 
A interface tem um método execute() que será chamado para realizar uma ação específica.

A interface Command define o contrato para todos os comandos. 
Cada comando que implementar essa interface precisará definir o método execute(), que é onde a lógica da ação será colocada.
*/