import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService
          .getAll()
          .filter((food) =>
            food.name
              .toLocaleLowerCase()
              .includes(params['searchTerm'].toLocaleLowerCase()),
          );
      } else {
        this.foods = this.foodService.getAll();
      }
      // console.log(params['searchTerm']);
    });
  }
}
