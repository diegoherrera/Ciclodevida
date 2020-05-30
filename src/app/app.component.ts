import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, DoCheck
, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked {
  

  
  
  
  title = 'ngchange';

  ngOnInit(): void {
    console.log("Method ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("Method ngOnDestroy");
  }

  ngDoCheck(): void {
    console.log("Method ngDoCheck como respuesta a cambios");
  }

  ngAfterContentInit(): void {
    console.log("Method ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("Method ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("Method ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("Method ngAfterContentChecked");
  }
 

}
