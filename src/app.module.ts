
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_TOKEN || 'SUPER_SECRET_KEY',
      signOptions: {
        expiresIn: '1h',
      },
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      // sync: { force: true },
    }),

    OrderModule,
    CategoryModule

  ],
})
export class AppModule {}