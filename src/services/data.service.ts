import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DataService {

  constructor() { }

  // Observable string sources
  private processAnnouncedSource = new Subject<string>();
  private processUpdatedSource = new Subject<string>();

  // Observable string streams
  processAnnounced$ = this.processAnnouncedSource.asObservable();
  processUpdated$ = this.processUpdatedSource.asObservable();

  // Service message commands
  announceProcess(process: string) {
    console.log('_SVC.announceProcess', process)
    this.processAnnouncedSource.next(process);
  }
  updateProcess(process: string) {
    console.log('_SVC.updateProcess', process)
    this.processUpdatedSource.next(process);
  }
}
