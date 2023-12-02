import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OrderDocument = Order & Document;
@Schema()
export class Order {
  @Prop()
  orderDetails: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
