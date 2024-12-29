import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/shared/models/fairs';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
fairId!:string;
fairObj!:Ifairs;
  constructor(
    private _routes:ActivatedRoute,
    private _fairService:FairsService
  ) { }

  ngOnInit(): void {
    this._routes.params
      .subscribe((params:Params)=>{
        console.log(params)
        this.fairId =params['fairId']
        if(this.fairId){
          this._fairService.fetchFairs(this.fairId)
          .subscribe(data=>{
            this.fairObj =data
          })
        }
      })
  }

}
