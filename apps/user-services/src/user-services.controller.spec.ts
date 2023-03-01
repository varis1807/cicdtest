import { Test, TestingModule } from '@nestjs/testing';
import { UserServicesController } from './user-services.controller';
import { UserServicesService } from './user-services.service';

describe('UserServicesController', () => {
  let userServicesController: UserServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserServicesController],
      providers: [UserServicesService],
    }).compile();

    userServicesController = app.get<UserServicesController>(UserServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userServicesController.getHello()).toBe('Hello World!');
    });
  });
});
