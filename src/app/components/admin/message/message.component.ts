import {
  AfterViewInit,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpService } from '../../../services/http.service';
import { map } from 'rxjs';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SlicePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, SlicePipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  providers: [HttpService],
})
export class MessageComponent implements AfterViewInit {
  displayedColumns: string[] = ['payload', 'action'];
  dataSource = new MatTableDataSource([]);
  readonly dialog = inject(MatDialog);
  readonly _httpService = inject(HttpService);
  detail = signal('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.getMessages();
    this.dataSource.paginator = this.paginator;
  }

  getMessages() {
    this._httpService
      .getMessages()
      .pipe(
        map((val) => {
          return val.map((msg: any) => {
            return {
              payload: msg.payload,
            };
          });
        }),
      )
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource(value);
        },
      });
  }

  openDialog(detail: string): void {
    this.detail.set(detail);
    const dialogRef = this.dialog.open(DetailComponent, {
      data: { detail: detail },
    });
  }
}
