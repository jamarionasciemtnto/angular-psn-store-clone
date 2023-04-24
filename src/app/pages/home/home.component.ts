import { Component, OnInit } from '@angular/core';
import { GamesModel } from '../../shared/models/games/games';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	games: GamesModel[];

	constructor() {
		this.games = [
			{
				id: 1,
				gameCover: 'assets/bt-1.jpg',
				gameLabel: 'DIGITAL',
				gameType: 'DIGITAL | PS4',
				gamePrice: 'R$ 129,99',
			},
			{
				id: 2,
				gameCover: 'assets/bt-4.jpg',
				gameLabel: 'EXCLUSIVE',
				gameType: 'DISC | PS5',
				gamePrice: 'R$ 269,99',
			},
			{
				id: 3,
				gameCover: 'assets/ac-cover.jpg',
				gameLabel: 'BEST OF YEAR',
				gameType: 'DIGITAL | PS5',
				gamePrice: 'R$ 369,99',
			},
			{
				id: 4,
				gameCover: 'assets/bt-hardline.jpg',
				gameLabel: 'NEW',
				gameType: 'DIGITAL | PS3 PS4 PS5',
				gamePrice: 'R$ 369,99',
			},
		];
	}

	ngOnInit(): void {}
}
