
import { FancyService } from './fancy.service';

// https://angular.io/guide/testing#isolated-unit-tests

export class DependentService {
  constructor(private dependentService: FancyService) { }
  getValue() { return this.dependentService.getValue(); }
}
