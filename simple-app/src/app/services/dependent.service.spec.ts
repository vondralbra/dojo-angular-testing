import { DependentService } from "./dependant.service";
import { FancyService } from "./fancy.service";
import { TestBed } from "@angular/core/testing";

describe("Test dependent service", function() {
  let service: DependentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FancyService]
    });
  });

  it("#getValue should return real value by way of the injected FancyService", () => {
    service = new DependentService(TestBed.get(FancyService));
    expect(service.getValue()).toBe("someValue");
  });

  it("#getValue should return real value by way of the real FancyService", () => {
    service = new DependentService(new FancyService());
    expect(service.getValue()).toBe("someValue");
  });
});
