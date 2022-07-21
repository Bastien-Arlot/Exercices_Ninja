import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../model/race.model';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {


	races: Array<RaceModel> = [];

  ngOnInit(): void {
	this.races = [
		{
			id: 12,
			name: 'Lyon',
			startInstant: '2020-02-18T08:02:00Z20-04-2021',
			ponies: [
				{ id: 1, name: 'Gentle Pie', color: 'YELLOW'},
				{ id: 2, name: 'Big Soda', color: 'Orange'},
				{ id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
      			{ id: 4, name: 'Superb Whiskey', color: 'GREEN' },
      			{ id: 5, name: 'Fast Rainbow', color: 'BLUE' }
			]
		
		}, {
			id: 13,
			name: 'London',
			startInstant: '2020-02-18T08:03:00Z',
			ponies: [
      { id: 6, name: 'Fast Rainbow', color: 'BLUE' },
      { id: 7, name: 'Gentle Castle', color: 'GREEN' },
      { id: 8, name: 'Awesome Rock', color: 'PURPLE' },
      { id: 9, name: 'Little Rainbow', color: 'YELLOW' },
      { id: 10, name: 'Great Soda', color: 'ORANGE' }
    ],

		}
	];
  }

}
