import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {
fairs!:Array<Ifairs>
selectedFairId!:string
  constructor(
    private _fairsService:FairsService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fairs =this._fairsService.fetchAllFairs()
    this.selectedFairId=this.fairs[0].fairId
    this._router.navigate([this.fairs[0].fairId],{
      relativeTo:this._route
    })
  }

}
