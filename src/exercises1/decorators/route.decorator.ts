import 'reflect-metadata';

const createRouteDecorator = (method: string) => {
  return (path: string): MethodDecorator => {
    return (target, propertyKey, descriptor) => {
      const routes = Reflect.getMetadata('routes', target) || [];
      routes.push({ method, path, handler: propertyKey });
      Reflect.defineMetadata('routes', routes, target);
    };
  };
};

export const Get = createRouteDecorator('get');
export const Post = createRouteDecorator('post');
export const Put = createRouteDecorator('put');
export const Patch = createRouteDecorator('patch');
export const Delete = createRouteDecorator('delete');
