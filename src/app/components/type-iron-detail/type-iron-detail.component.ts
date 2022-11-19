import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { IronTypeService } from 'src/app/services/iron-type.service';
import { Iron_Type } from 'src/app/models/iron_type';

@Component({
  selector: 'app-type-iron-detail',
  templateUrl: './type-iron-detail.component.html',
  styleUrls: ['./type-iron-detail.component.css']
})
export class TypeIronDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
