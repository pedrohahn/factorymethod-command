// TakeoutOrderFactory.ts
import { Order } from './Order';
import { TakeoutOrder } from './TakeoutOrder';
import { OrderFactory } from './OrderFactory';

export class TakeoutOrderFactory extends OrderFactory {
  createOrder(): Order {
    return new TakeoutOrder();
  }
}

/*
--- Factory Method ---
A fábrica específica para criar instâncias de TakeoutOrder.

TakeoutOrderFactory é uma fábrica concreta que implementa createOrder() e retorna uma nova instância de TakeoutOrder.
*/