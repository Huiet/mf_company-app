import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from "shell/Utilities";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  valueOfFoo = '';

  constructor(
    private foobar: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.valueOfFoo = this.foobar.getFoo();
  }

}
