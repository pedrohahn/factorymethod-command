// DeliveryOrderFactory.ts
import { Order } from './Order';
import { DeliveryOrder } from './DeliveryOrder';
import { OrderFactory } from './OrderFactory';

export class DeliveryOrderFactory extends OrderFactory {
  createOrder(): Order {
    return new DeliveryOrder();
  }
}

/*
--- Factory Method ---
A fábrica específica para criar instâncias de DeliveryOrder.

DeliveryOrderFactory é uma fábrica concreta que implementa createOrder() e retorna uma nova instância de DeliveryOrder.
*/
