import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { DataService }  from '../../services'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'sub-comp-b',
  templateUrl: './sub-comp-b.component.html'
})
export class SubCompBComponent implements OnInit {

  subtitle = 'Sub Comp B'

  @Input() process: string
  subscription: Subscription

  constructor(private dataService: DataService) {
    this.subscription = dataService.processAnnounced$.subscribe(
      process => {
        console.log('__SubCompB.init:', process)
        this.process = process
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onChangeProcess () {
    this.dataService.updateProcess( '1' )
  }
}
