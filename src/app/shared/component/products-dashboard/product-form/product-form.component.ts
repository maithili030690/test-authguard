import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp } from 'src/app/shared/models/canDeactivate';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit,IcanDeactivateComp {
productId!:string;
productObj!:Iproduct;
productForm!:FormGroup;
isInEditMode:boolean=false;
updateBtnFlag:boolean =false;
  constructor(
    private _routes:ActivatedRoute,
    private _productService :ProductService,
    private _uuidService:UuidService
  ) { }


  ngOnInit(): void {
    this.productForm = new FormGroup({
      pname:new FormControl (null,[Validators.required]),
      pstatus:new FormControl(null,[Validators.required]),
      canReturn : new FormControl(null,[Validators.required])
    })
    this.productId = this._routes.snapshot.params['productId']
    if(this.productId){
      this.isInEditMode =true

      this.productObj =this._productService.fetchProduct(this.productId)
      this.productForm.patchValue({...this.productObj,canReturn:this.productObj.canReturn ? "Yes": "No"})
      
    }
    this._routes.queryParams
        .subscribe((params:Params)=>{
          console.log(params);
          if(params['canReturn']==='0'){
            this.productForm.disable()
            this.updateBtnFlag =true
          }
        })
  
  }
  onProducAdd(){
   if(this.productForm.valid){
    console.log(this.productForm)
    let canReturnVal = this.productForm.controls['canReturn'].value ==="Yes"? 1: 0;
    console.log({...this.productForm,canReturnVal})

    let product :Iproduct= {...this.productForm.value,
      canReturn:canReturnVal,
      pid:this._uuidService.generateUuid()
      
    }
    console.log(product)
    this._productService.postProduct(product)
   } 
  }
  onProductUpdate(){
    if(this.productForm.valid){
      //upfated obj
      let updatedObj :Iproduct= {...this.productForm.value,
        pid:this.productId,
        canReturn:this.productForm.controls['canReturn'].value ==="Yes" ? 1 : 0
      }
      console.log(updatedObj)
      this.productForm.reset()
      this._productService.updatedProd(updatedObj)
    }
  }
  canDeactivate(){
    // return false
    if(this.productForm.dirty){
      let getConfirmation = confirm(`Are you sure you want to discard the changes??`)
      return getConfirmation
    }
    return true
  }
}
