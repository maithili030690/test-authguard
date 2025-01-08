import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit {
products:Array<Iproduct>=[];

selectedProdId!:string;

  constructor(
    private _productService :ProductService,
    private _route:ActivatedRoute,
    private _router:Router

  ) {
    console.log(this._route)
    this._route.data
    .subscribe(res=>{
      console.log(res['productData'])
      this.products =(res['productData'])
      this.selectedProdId = this.products[0].pid
      this._router.navigate([this.products[0].pid],{
        relativeTo:this._route,
        queryParams:{
          canReturn :this.products[0].canReturn
        }
      })
    })
   }

  ngOnInit(): void {
    // this.products = this._productService.fetchAllProducts()
 

  
    //   this.selectedProdId=this.products[0].pid
    //   this._router.navigate([this.products[0].pid],{
    //     relativeTo:this._route,
    //     queryParams:{canReturn:this.products[0].canReturn}
    //   })
  }
  onProdClick(prod:Iproduct){
    console.log(prod)
    this.selectedProdId=prod.pid
  }
}
