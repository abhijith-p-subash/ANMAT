import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Layout } from './layout.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  layout: Layout = 'modern';

  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.data['layout']);
    
    if (this._route.snapshot.data['layout'])
      this.layout = this._route.snapshot.data['layout'];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
