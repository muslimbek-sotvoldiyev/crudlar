import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'orders',
})
export class Order extends Model<Order> {
    @Column({
        type: DataType.INTEGER,

    })userid!: number;
    
    @Column({
        type: DataType.INTEGER,

    })total_price!: number;
    @Column({
        type: DataType.INTEGER,

    })product_id!: number;
    @Column({
        type: DataType.INTEGER,

    })count!: number;
}