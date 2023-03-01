import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationAadhaarController } from './registration-aadhaar.controller';

describe('RegistrationAadhaarController', () => {
  let controller: RegistrationAadhaarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrationAadhaarController],
    }).compile();

    controller = module.get<RegistrationAadhaarController>(RegistrationAadhaarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
