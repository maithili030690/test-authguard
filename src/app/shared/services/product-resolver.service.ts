import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../models/product';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Iproduct[]>{

  constructor(private _productService:ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this._productService.fetchAllProducts()
  }
}
