import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationMobileController } from './registration-mobile.controller';

describe('RegistrationMobileController', () => {
  let controller: RegistrationMobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationMobileController],
    }).compile();

    controller = module.get<RegistrationMobileController>(RegistrationMobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
