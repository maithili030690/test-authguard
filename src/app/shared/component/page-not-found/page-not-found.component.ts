import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  getMsgFromRoute!:string;
  constructor(
    private _router :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMsgFromRoute=this._router.snapshot.data['msg']
  }

}
