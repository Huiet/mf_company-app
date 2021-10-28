import { Component, OnInit } from '@angular/core';

// import { FOOBAR } from '@common/utilities';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // console.log('foo', FOO);
    // console.log('foo', FOOBAR);
  }

}
