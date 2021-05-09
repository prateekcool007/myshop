import { Component, NgModule, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {
  // Class Members
  public Categories: any = [];

  constructor(
    private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: data => {
        this.Categories = data;
      }
    });
  }

}
