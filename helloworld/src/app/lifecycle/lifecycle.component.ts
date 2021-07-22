import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  name="Martinho"
  @Input('data') data;
  constructor() {
    console.log('constructor runned');
   }

  ngOnInit(): void {
      console.log(`ngOnInit ${this.name}`);
  }
  ngDoCheck(){
    console.log(`ngDoCheck ${this.name}`);
  }

  ngOnChanges(){
    console.log(`ngOnChanges ${this.name}`);
    
  }
  ngAfterContentInit(){
    console.log(`ngAfterContentInit ${this.name}`);
  }
  ngAfterContentChecked(){
    console.log(`ngAfterContentChecked ${this.name}`);
  }
  ngAfterViewInit(){
    console.log(`ngAfterViewInit ${this.name}`);
  }
  ngAfterViewChecked(){
    console.log(`ngAfterViewChecked ${this.name}`);
  }
  ngOnDestroy(){
    console.log(`ngOnDestroy ${this.name}`);
  }
}
