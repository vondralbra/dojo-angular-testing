import { FancyService } from './fancy.service';
describe("Test: FancyService", function() {
  let service: FancyService;


it('#getValue should return a simple value', () => {
service = new FancyService();
  expect(service.getValue()).toBe('someValue');
});


  it("#getObservableValue should return observable value", (done: DoneFn) => {
    service = new FancyService();

    service.getObservable().subscribe(value => {
      expect(value).toBe("observable value");
      done();
    });
  });
});


