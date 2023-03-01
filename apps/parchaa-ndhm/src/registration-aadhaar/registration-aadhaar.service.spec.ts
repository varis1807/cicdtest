import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationAadhaarService } from './registration-aadhaar.service';

describe('RegistrationAadhaarService', () => {
  let service: RegistrationAadhaarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationAadhaarService],
    }).compile();

    service = module.get<RegistrationAadhaarService>(RegistrationAadhaarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
