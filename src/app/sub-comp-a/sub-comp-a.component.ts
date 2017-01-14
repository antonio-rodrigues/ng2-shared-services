import { Component, OnInit, Input, OnDestroy } from '@angular/core'

import { DataService }  from '../../services'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'sub-comp-a',
  templateUrl: './sub-comp-a.component.html'
})
export class SubCompAComponent implements OnInit, OnDestroy {

  subtitle = 'Sub Comp A'

  @Input() process: string
  subscription: Subscription

  constructor(private dataService: DataService) {
    this.subscription = dataService.processAnnounced$.subscribe(
      process => {
        console.log('__SubCompA.init:', process)
        this.process = process
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
