import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  data: any[] = [];
  productFormPost: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.productFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      sale_price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      status: ['1', [Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  getAll() {
    this.productService.findAllCategory().subscribe((response: any) => {
      console.log(response);
      this.data = response;
    }, (err:any) => {
      console.log(err);
    })
  }

  handleSubmit() {
    let formData = this.productFormPost.value;
    let data = {
      name: formData.name,
      price: formData.price,
      sale_price: formData.sale_price,
      image: formData.image,
      date_product: formData.date,
      status: formData.status,
      category_id: formData.category_id,
    }
    console.log(data)
    this.productService.save(data).subscribe((response: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Add Successfully !',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/']);
    }, (error:any) => {
      console.log(error)
    })
  }
}
