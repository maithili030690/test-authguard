import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Iproduct> {
  private _productService =inject(ProductService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct{
  console.log(route['params'])
  let productId:string =route.params['productId']
  let obj = this._productService.fetchProduct(productId)
  console.log(obj)
  return obj
  }
}
