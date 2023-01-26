import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/product/productservice/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchterm: any

  constructor(private ps:ProductserviceService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchterm = event.target.value
    this.ps.search.next(this.searchterm)
  }

}
