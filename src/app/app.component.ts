import { Component, OnInit } from '@angular/core';

import { SubCompAComponent } from './sub-comp-a/sub-comp-a.component'
import { SubCompBComponent } from './sub-comp-b/sub-comp-b.component'

import { DataService } from '../services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ DataService ]
})
export class AppComponent implements OnInit {
  title = 'ROOT APP';
  process: string = '-1';

  constructor(
    private dataService: DataService) {
    dataService.processUpdated$.subscribe(
      process => {
        console.log(`[root] Process updated to: ${process}`);
        this.updateStatus( process )
      });
  }

  ngOnInit () {
    this.updateStatus( '0' )
  }

  updateStatus (status: string) {
    // this.process = status
    this.dataService.announceProcess( status )
  }
}
