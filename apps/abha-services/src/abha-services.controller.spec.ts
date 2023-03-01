import { Test, TestingModule } from '@nestjs/testing';
import { AbhaServicesController } from './abha-services.controller';
import { AbhaServicesService } from './abha-services.service';

describe('AbhaServicesController', () => {
  let abhaServicesController: AbhaServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AbhaServicesController],
      providers: [AbhaServicesService],
    }).compile();

    abhaServicesController = app.get<AbhaServicesController>(AbhaServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(abhaServicesController.getHello()).toBe('Hello World!');
    });
  });
});
