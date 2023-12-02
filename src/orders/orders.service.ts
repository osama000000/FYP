// orders/order.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './Schema/orders';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async getOrdersByUserId(userId: string): Promise<Order[]> {
    return this.orderModel.find({ userId }).exec();
  }
}
