import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiRoutes } from '../../environments/environment';
import { map } from "rxjs/operators";
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient) { }

  public getCategories() {
    var url = `${environment.apiBaseUrl}/${ApiRoutes.Category}`;
    return this.http.get<Category[]>(url);
  }
}
