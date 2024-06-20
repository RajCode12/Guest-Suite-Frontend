import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrl: './assist.component.css'
})
export class AssistComponent implements OnInit{
  assistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.assistForm = this.fb.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      query: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.assistForm.valid) {
      console.log(this.assistForm.value);
    }
  }
}
