import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    /**
     * Retrieve list of products from github repo
     */
    return this.http.get<Product[]>('https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json').pipe(shareReplay());
  }
}
