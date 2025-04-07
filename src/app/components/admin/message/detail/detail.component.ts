import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-customer-activate-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './detail.component.html',
  providers: [HttpService],
})
export class DetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { detail: string },
    public dialogRef: MatDialogRef<DetailComponent>,
  ) {}

  closeDialog() {
    this.dialogRef.close('Close!');
  }
}
