"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeoutOrderFactory = void 0;
const TakeoutOrder_1 = require("./TakeoutOrder");
const OrderFactory_1 = require("./OrderFactory");
class TakeoutOrderFactory extends OrderFactory_1.OrderFactory {
    createOrder() {
        return new TakeoutOrder_1.TakeoutOrder();
    }
}
exports.TakeoutOrderFactory = TakeoutOrderFactory;
/*
--- Factory Method ---
A fábrica específica para criar instâncias de TakeoutOrder.

TakeoutOrderFactory é uma fábrica concreta que implementa createOrder() e retorna uma nova instância de TakeoutOrder.
*/ 
