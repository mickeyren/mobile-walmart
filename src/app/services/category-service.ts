import { Injectable } from '@angular/core';
import { CATEGORIES } from './mock-categories';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CategoryService {
  private categories: any;

  constructor(private http: HttpClient) {
    this.categories = CATEGORIES;
  }

  getAll() {
    return this.categories;
  }

  getItem(id) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === parseInt(id)) {
        return this.categories[i];
      }
    }
    return null;
  }

  remove(item) {
    this.categories.splice(this.categories.indexOf(item), 1);
  }

}
