// NestJS_3week/src/bai19/error-test.controller.ts

import {
  Controller,
  Get,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  RequestTimeoutException,
  ConflictException,
  InternalServerErrorException,
  NotImplementedException,
  BadGatewayException,
  GatewayTimeoutException,
} from '@nestjs/common';

@Controller('errors')
export class ErrorTestController {
  @Get('bad-request')
  badRequest() {
    throw new BadRequestException('This is a bad request');
  }

  @Get('unauthorized')
  unauthorized() {
    throw new UnauthorizedException('Unauthorized access');
  }

  @Get('not-found')
  notFound() {
    throw new NotFoundException('Resource not found');
  }

  @Get('forbidden')
  forbidden() {
    throw new ForbiddenException('Access denied');
  }

  @Get('not-acceptable')
  notAcceptable() {
    throw new NotAcceptableException('Not acceptable content type');
  }

  @Get('request-timeout')
  requestTimeout() {
    throw new RequestTimeoutException('Request timeout');
  }

  @Get('conflict')
  conflict() {
    throw new ConflictException('Resource conflict');
  }

  @Get('internal-server-error')
  internalServerError() {
    throw new InternalServerErrorException('Internal server error');
  }

  @Get('not-implemented')
  notImplemented() {
    throw new NotImplementedException('Feature not implemented');
  }

  @Get('bad-gateway')
  badGateway() {
    throw new BadGatewayException('Bad gateway');
  }

  @Get('gateway-timeout')
  gatewayTimeout() {
    throw new GatewayTimeoutException('Gateway timeout');
  }
}
