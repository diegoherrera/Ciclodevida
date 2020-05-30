import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent implements OnInit, OnDestroy, OnChanges {
  @Input() data: string;
  allMsgChangeLogs: string[] = [];

  constructor() { 

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("paso por evento onchange" + JSON.stringify(changes));
    for (let propName in changes) {
      let change = changes[propName];

      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

      if (propName === 'data') {
        this.allMsgChangeLogs.push(changeLog);
      }
    }
  }

  ngOnDestroy(): void {
    console.log('paso por el metodo de destruccion del hijo');
  }
  

  ngOnInit(): void {
    console.log("Method ngOnInit del componente hijo");
  }

}
