import * as express from 'express';

import 'reflect-metadata';

export const bootstrap = (moduleClass: any) => {
  const app = express();
  const moduleMetadata = Reflect.getMetadata('module', moduleClass);

  if (!moduleMetadata || !moduleMetadata.controllers) {
    throw new Error('No controllers found in module!');
  }

  moduleMetadata.controllers.forEach((controller: any) => {
    const instance = new controller();
    const basePath = Reflect.getMetadata('basePath', controller);
    const routes = Reflect.getMetadata('routes', controller.prototype);

    if (!routes) return;

    routes.forEach(({ method, path, handler }: any) => {
      app[method](`${basePath}${path}`, (req, res) => {
        instance[handler](req, res);
      });
    });
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
};
