import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe','This is simply a test', 'https://media.istockphoto.com/photos/rhubarb-pie-or-tart-picture-id1237189866?s=612x612'),
    new Recipe('Spaghetti Carbonara', 'Spaghetti cooked with Egg, Pancetta, Oregano', 'https://media.istockphoto.com/photos/traditional-italian-dish-spaghetti-carbonara-with-bacon-in-a-cream-picture-id910704720?s=612x612')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
