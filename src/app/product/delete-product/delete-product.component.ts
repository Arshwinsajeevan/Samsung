import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice/productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id:any

  constructor(private ps:ProductserviceService,private ar:ActivatedRoute,private router:Router) { }

  // ActivatedRoute is class to get params from url
    

  ngOnInit(): void {
      this.ar.params.subscribe((data:any)=>{
      this.id=data["id"]
    })
    this.ps.deleteProduct(this.id).subscribe((data:any)=>{
      alert('Product deleted')
      this.router.navigateByUrl("product")
    })
  }

}
