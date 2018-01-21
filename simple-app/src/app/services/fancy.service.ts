import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

// servicewith no dependancies
@Injectable()
export class FancyService {

  myObservableValue = 'observable value';

  getValue(): string {
    return 'someValue';
  }

  getObservable(): Observable<string> {
    const myObservableValue2 = this.myObservableValue;
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(myObservableValue2);
        console.log('am done');
        observer.complete(); // to show we are done with our processing
       // observer.error(new Error("error message"));
      }, 2000);
    });
  }
}
