import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId!:string;
productObj!:Iproduct;
  constructor(
    private _route:ActivatedRoute,
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    // this.productId = this._route.snapshot.params['productId']
    // if(this.productId){
    //   this.productObj = this._productService.fetchProduct(this.productId)
    // }

    this._route.params
    .subscribe((params:Params)=>{
      console.log(params)
      this.productId =params['productId']
      if(this.productId){
        this.productObj = this._productService.fetchProduct(this.productId)
        console.log(this.productObj)
      }

    })
  }
  onProuctRemove(){
    let getConfirm = confirm(`Are You Sure , You Want to Remove this Product`)
    if(getConfirm){
      this._productService.removeProd(this.productId)
    }
  }
}
