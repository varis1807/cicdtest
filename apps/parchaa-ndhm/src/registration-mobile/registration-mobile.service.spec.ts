import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationMobileService } from './registration-mobile.service';

describe('RegistrationMobileService', () => {
  let service: RegistrationMobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationMobileService],
    }).compile();

    service = module.get<RegistrationMobileService>(RegistrationMobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
