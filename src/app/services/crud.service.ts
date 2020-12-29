import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Products} from '../models/products';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  // base api url  
  public url = environment.web_api_url_base;

  constructor(private http: HttpClient) { }
  
  // get all product list
  getProducts(): Observable<Products []> {
    return this.http.get<Products []>(this.url + 'view.php').pipe( map(data => {
      return data;
    })
   );
  }
  
  // get single product
  getProductsDetails(id): Observable<Products> {
    return this.http.get<Products>(this.url + 'view_one.php?id=' + id).pipe(map(response => {
      return response;
    }));
  }
  
  // create a new product
  createProduct(data) {
    return this.http.post(this.url + 'create.php', data).pipe( map(response =>{
      return response;
    }));
  }
  //update an existing product
  updateProduct(data) {
    return this.http.post(this.url + 'update.php', data).pipe(map(response =>{
      return response;      
    }));
  }
  // delete a product
  deleteProduct(id) {
    return this.http.get(this.url + 'delete.php?id=' + id).pipe(map(response => {
      return response;      
    }));
  }
  
}
