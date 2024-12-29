import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArr :Array<Iproduct> =[
    {
      pname:"Samsung M31",
      pid:"123",
      pstatus:"In-Progress",
      canReturn : 1
    },
    {
      pname:"Samsung TV",
      pid:"124",
      pstatus:"Dispatched",
      canReturn : 1
    },
    {
      pname:"Iphone",
      pid:"125",
      pstatus:"Delivered",
      canReturn : 0
    }
  ]
  
  constructor(
    private _router:Router,
    private _snackbarService:SnackbarService
  ) { }

  fetchAllProducts():Array<Iproduct>{
    //Api call to fetch all products
    return this.productsArr
  }
  fetchProduct(id:string):Iproduct{
    //Api call to fetch the product data
    return this.productsArr.find(prod=>prod.pid===id)!
  }
  postProduct(productObj:Iproduct){
    //APi call to post data in db
    this.productsArr.push(productObj)
    this._router.navigate(['products'])
    this._snackbarService.openSnackBar(`New Product ${productObj.pname} is Added successfully`)
  }
  updatedProd(product:Iproduct){
    let getIndex = this.productsArr.findIndex(prod=>prod.pid===product.pid)
    this.productsArr[getIndex]=product
    this._router.navigate(['products',product.pid],{
      queryParams:{canReturn:product.canReturn}
    })
    this._snackbarService.openSnackBar(`The Product ${product.pname} is updated successfully`)
  }
  removeProd(id:string){
    let getIndex = this.productsArr.findIndex(prod=>prod.pid===id)
    this.productsArr.splice(getIndex,1);
    this._router.navigate(['products'])
    this._snackbarService.openSnackBar(`The product is removed successfully`)
  }
}
