import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // cors: {
      //   origin: 'http://localhost:3000',
      //   credentials: true,
      //   origin: true,
      // },
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // playground: false,
      // debug: false
    }),
    // GraphQLModule.forRootAsync({
    //   driver: ApolloDriver,
    //   // sortSchema: true,
    //   useFactory: () => {
    //     return {
    //       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //       // autoSchemaFile: true,
    //       cors: {
    //         credentials: true,
    //         origin: true,
    //         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //         allowedHeaders:
    //           'Content-Type,Accept,Authorization,Access-Control-Allow-Origin',
    //       },
    //       context: ({ req }) => {
    //         return { req };
    //       },
    //       installSubscriptionHandlers: true,
    //     };
    //   },
    // }),
    ProductModule,
    UserModule,
    AuthModule,
    PurchaseModule,
  ],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
