import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MyValidator } from './../../../utils/validators'

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  form: FormGroup;
  id: string;
  title: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit(){
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id)
      this.productsService.getProduct(this.id)
      .subscribe(product =>{
        this.product = product[0]
        //this.form.get('product').patchValue(product);
        this.form.get('title').setValue(this.product.title);
        this.form.get('image').setValue(this.product.image);
        this.form.get('price').setValue(this.product.price);
        this.form.get('description').setValue(this.product.description);
        this.form.get('typeCar').setValue(this.product.typeCar);
      });

    });
  }
  saveProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) =>{
        console.log(newProduct);

        this.router.navigate(['./admin/inventory']);
      });

    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidator.isPriceValid]],
      image: ['',[Validators.required]],
      typeCar: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }
  get priceField(){
    return this.form.get('price');
  }
}
