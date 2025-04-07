import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from '../../../../services/http.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-partner',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',

  providers: [HttpService],
})
export class CreatePartnerComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private _httpService: HttpService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = fb.group({
      alias: ['', [Validators.required]],
      type: ['', [Validators.required]],
      direction: [''],
      application: [''],
      flowType: [''],
      description: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this._httpService.createtPartner(this.form.value);
    this.router.navigate(['/admin/partners']);
  }
}
