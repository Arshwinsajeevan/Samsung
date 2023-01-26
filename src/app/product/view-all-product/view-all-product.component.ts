import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice/productservice.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList:any
  filterproducts:any
  searchkey:any

  constructor(private ps:ProductserviceService) { }

  ngOnInit(): void {
    this.ps.viewAllProducts().subscribe((data:any)=>{
      console.log(data);
      this.productList=data
    })

     // access data from behaviour subject
     this.ps.search.subscribe((data:any)=>{
        this.searchkey=data
     })
    
  }

  filter(category:any){
    this.filterproducts=this.productList.filter((item:any)=>{
      if(item.categoryId==category || category==""){
        return item
      }
    })
  }

}
