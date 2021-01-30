import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css']
})
export class Session1Component implements OnInit {
alignement='right';
couleur='red';
  constructor() { }

  ngOnInit(): void {
  }

}
