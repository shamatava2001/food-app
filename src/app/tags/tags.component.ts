import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  tags!: Tag[];

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
