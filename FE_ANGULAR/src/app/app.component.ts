import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'FE_ANGULAR';

  page:number=1;
  data: any = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.findAllCategory().subscribe((response: any) => {
      console.warn(response);
      this.data = response;
    }, (err:any) => {
      console.log(err);
    })
  }

  onProductBycate(categoryId: any){
    this.router.navigate([`product/cate/${categoryId}`]);
  }
}
