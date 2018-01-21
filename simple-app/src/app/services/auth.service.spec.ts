import {AuthService} from './auth.service';

describe('Service: Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('should return true from isAuthenticated when there is any userId', () => {
    localStorage.setItem('userId', 'egal');
    expect(service.isAuthenticated()).toBeTruthy();
  });


  it('should return true from isUserAuthenticated when the given user id is known', () => {
    localStorage.setItem('userId', '1234');
    expect(service.isUserAuthenticated('1234')).toBeTruthy();
  });

  it('should return false from isUserAuthenticated when the given user id is unknown', () => {
    localStorage.setItem('userId', '1234');
    expect(service.isUserAuthenticated('666')).toBeFalsy();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('userId');
  });
});
