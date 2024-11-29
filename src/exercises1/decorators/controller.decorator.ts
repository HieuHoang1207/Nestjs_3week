import 'reflect-metadata';

export const Controller = (basePath: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('basePath', basePath, target);
  };
};
