import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ContentEndpointService } from './content-endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    protected contentEndpointService: ContentEndpointService,
    private _snackBar: MatSnackBar
  ) { }

  addContent(item: any) {
    this.contentEndpointService.addContent(item).subscribe(
      (res: HttpResponse<Object>) => {
        if (res.status == 201) {
          this.openSnackBar('Content saved!', 'success-snack-bar')
        } else {
          this.openSnackBar('Content not saved due to an error /:', 'error-snack-bar')
        }
      },
      (error) => {
        this.openSnackBar('Content not saved due to an error /:', 'error-snack-bar');
        console.log(error);
      }
    );
  }

  openSnackBar(message: string, className: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: className
    });
  }
}
