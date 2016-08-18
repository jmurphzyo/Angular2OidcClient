import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-protected',
  templateUrl: 'protected.component.html',
  styleUrls: ['protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  goback(){
    this.location.back();
  }

}
