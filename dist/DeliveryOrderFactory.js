"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderFactory = void 0;
const DeliveryOrder_1 = require("./DeliveryOrder");
const OrderFactory_1 = require("./OrderFactory");
class DeliveryOrderFactory extends OrderFactory_1.OrderFactory {
    createOrder() {
        return new DeliveryOrder_1.DeliveryOrder();
    }
}
exports.DeliveryOrderFactory = DeliveryOrderFactory;
/*
--- Factory Method ---
A fábrica específica para criar instâncias de DeliveryOrder.

DeliveryOrderFactory é uma fábrica concreta que implementa createOrder() e retorna uma nova instância de DeliveryOrder.
*/
