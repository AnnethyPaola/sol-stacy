import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-queue-person',
  templateUrl: './queue-person.component.html',
  styleUrls: ['./queue-person.component.scss']
})
export class QueuePersonComponent implements OnInit {

  formModal: any;

  constructor(
    public dialog: MatDialog
  ) { }



  ngOnInit(): void {
    
    
    
  }

}
