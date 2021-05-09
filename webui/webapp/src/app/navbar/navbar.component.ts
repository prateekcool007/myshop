import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-cards/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Class Members
  public Categories: any = [];

  constructor(
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: data => {
        this.Categories = data;
      }
    });
  }

}
