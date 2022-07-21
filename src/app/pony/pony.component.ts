import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PonyModel } from '../model/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
@Input() ponyModel!: PonyModel;
@Output() readonly ponyClicked = new EventEmitter<PonyModel>();

  constructor() { }

  getPonyImageUrl(): string {
	return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }

  clicked() {
	this.ponyClicked.emit(this.ponyModel);
  }

  ngOnInit(): void {
  }

}
