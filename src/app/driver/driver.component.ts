import { Component, OnInit } from '@angular/core';
import {DriverdataService} from '../driverdata.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  
  users$: Object;
  
  constructor(private data: DriverdataService) { }

  ngOnInit() {
    this.data.getDrivers().subscribe(
      data => this.users$ = data 
    );
  }

}
