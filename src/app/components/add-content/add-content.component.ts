import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.less']
})
export class AddContentComponent implements OnInit {
 
  contentForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contentForm = this._formBuilder.group({
      contentBody: ['', Validators.required], 
      tagsCategories: ['', Validators.required]
    });
  }

  submitContent() {
    console.log(this.contentForm.value);
    console.log(this.contentForm.controls.contentBody.value);
    console.log(this.contentForm.controls.tagsCategories.value);
    console.log(this.contentForm);
  }
}
