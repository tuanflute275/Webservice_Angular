import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-by-cate',
  templateUrl: './product-by-cate.component.html',
  styleUrls: ['./product-by-cate.component.scss']
})
export class ProductByCateComponent {
  page: number = 1;
  data: any = [];
  keywords: any;
  myGroup: any = new FormGroup({
    keywords: new FormControl(''),
  });
  id: number = this.route.snapshot.params['id'];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getAll()
  }

  getByName(keyword: any) {
    this.productService.search(keyword).subscribe((response: any) => {
      this.data = response;
    }, (err:any) => {
      console.log(err);
    })
  }

  handleChange(e: any) {
    this.keywords = e.target.value;
    if (this.keywords) {
      this.getByName(this.keywords);
    } else {
      this.getAll();
    }
  }

  getAll() {
    this.productService.findByCategory(this.id).subscribe((response: any) => {
      console.log(response)
      this.data = response;
    }, (err:any) => {
      console.log(err);
    })
  }

  onEditProduct(productId: any){
    this.router.navigate([`product/edit/${productId}`]);
  }

  onDeleteProduct(productId: any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delete(productId).subscribe((res: any) => {
          console.log(res);
          this.getAll();
        }, (err:any) => {
          console.log(err);
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
