import {TimeService} from './time.service';

describe('Service: TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    service = new TimeService();
  });

  it('should return dummy time from getDummyTime', () => {
    expect(service.getDummyTime()).toBe('7:15');
  });

  afterEach(() => {
    service = null;
  });
});
