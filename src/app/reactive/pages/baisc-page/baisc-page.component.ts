import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-baisc-page',
  templateUrl: './baisc-page.component.html',
  styleUrls: ['./baisc-page.component.scss'],
})
export class BaiscPageComponent {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []), //valor por defecto,validación sincrona,validación asincrona
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []), //valor por defecto,validación sincrona,validación asincrona
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });
  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
  }
}
