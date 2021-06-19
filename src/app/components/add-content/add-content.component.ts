import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.less']
})
export class AddContentComponent implements OnInit {
 
  contentForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private contentService: ContentService) { }

  ngOnInit() {
    this.contentForm = this._formBuilder.group({
      body: ['', Validators.required], 
      tags: ['', Validators.required]
    });
  }

  submitContent() {
    console.log(this.contentForm.value);
    console.log(this.contentForm.controls.body.value);
    console.log(this.contentForm.controls.tags.value);
    console.log(this.contentForm);

    this.contentService.addContent(this.contentForm.value);
  }
}
