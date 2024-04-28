import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  data: any[] = [];
  imgUrl:any;
  categoryId:any;
  categoryName:any;

  productFormPost = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    category_id: new FormControl('1'),
    status: new FormControl(''),
    date: new FormControl(''),
  })
  id: number = this.route.snapshot.params['id'];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.getAllCategory();
    this.getOneProduct(this.id);
  }

  getAllCategory() {
    this.productService.findAllCategory().subscribe((response: any) => {
      console.log(response);
      this.data = response;
    }, (err:any) => {
      console.log(err);
    })
  }

  getOneProduct(id: number) {
    this.productService.findById(id).subscribe((response: any) => {
      console.warn(response.date_product);
      this.imgUrl = response.image;
      this.categoryId = response.category_id;
      this.categoryName = response.category_name;
      this.productFormPost = new FormGroup({
        name: new FormControl(response.name),
        price: new FormControl(response.price),
        sale_price: new FormControl(response.sale_price),
        image: new FormControl(response.image),
        category_id: new FormControl(response.category_id),
        status: new FormControl(response.status),
        date: new FormControl(response.date_product),
      });
    });
  }
  handleSubmit() {
    let formData = this.productFormPost.value;
    let data = {
      productId: this.id,
      name: formData.name,
      price: formData.price,
      sale_price: formData.sale_price,
      image: formData.image,
      category_id: formData.category_id,
      status: formData.status,
      date_product: formData.date,
    }
    console.log(data)
    this.productService.update(data).subscribe((response: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Update Successfully !',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/']);
    }, (error:any) => {
      console.log(error)
    })
  }
}
