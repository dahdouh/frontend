import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { HttpService } from '../../../services/http.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export enum Direction {
  Inbound="INBOUND",
  Outbound="OUTBOUND",
}
export enum FlowType {
  Message="MESSAGE",
  Alerting="ALERTING",
  Notification="NOTIFICATION",
}

export interface Partner {
  name: string;
  phone: number;
  address: number;
  blood: string;
  alias: string;
  type: string;
  direction: Direction;
  application: string;
  flowType: FlowType;
  description: string;
}
@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
  providers: [HttpService],
})
export class PartnerComponent implements OnInit {
  displayedColumns: string[] = [
    'alias',
    'type',
    'direction',
    'application',
    'flowType',
    'description',
    'action',
  ];
  dataSource = new MatTableDataSource([]);

  constructor(private _httpService: HttpService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getPartner();
    this.dataSource.paginator = this.paginator;
  }

  getPartner() {
    this._httpService
      .getPartners()
      .pipe()
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
        },
      });
  }

  delete(id: number) {
    this._httpService.delete(id);
    this.refreshTable(id);
  }
  refreshTable(id: number): void {
    console.log('before', this.dataSource.data);
    this.dataSource.data = this.dataSource.data.filter(
      (item) => item['id'] !== id,
    );
    console.log('after', this.dataSource.data);
  }
}
