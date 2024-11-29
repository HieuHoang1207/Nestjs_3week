import 'reflect-metadata';

export const Module = (metadata: { controllers: any[] }): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('module', metadata, target);
  };
};
