import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '01942473820',
  database: 'task_management',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, //every time we change the entity, it will automatically update the database
};
