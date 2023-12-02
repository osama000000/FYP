import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderService } from './orders.service';
import { Order } from './Schema/orders';
import { JwtAuthGuard } from 'src/jwt-auth.guard';

// orders/order.controller.ts

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @UseGuards(JwtAuthGuard)
  @Post('user')
  async getOrdersForUser(@Req() req): Promise<Order[]> {
    const userId = req.user.id;
    return this.orderService.getOrdersByUserId(userId);
  }
}
