import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ArticleModule } from '@app/article/article.module';
import ormconfig from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';
import { AuthMiddleware } from '@app/user/middlewares/auth.middleware';
import { UserModule } from '@app/user/user.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    UserModule,
    ArticleModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
