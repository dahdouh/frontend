import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Partner } from '../components/admin/partner/partner.component';

@Injectable()
export class HttpService {
  private apiUrl: string = environment.apiUrl;
  private http: HttpClient = inject(HttpClient);

  getMessages(): Observable<any> {
    const url = `${this.apiUrl}/message`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      }),
    );
  }

  getPartners(): Observable<any> {
    const url = `${this.apiUrl}/partner`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      }),
    );
  }

  createtPartner(partner: Partner) {
    const url = `${this.apiUrl}/partner`;
    this.http
      .post<Partner>(url, partner)
      .subscribe((value) => console.log('partner created'));
  }

  delete(id: any) {
    const url = `${this.apiUrl}/partner/${id}`;
    this.http.delete(url).subscribe((value) => console.log('partner created'));
  }

  login(loginData: any): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<any>(url, loginData).pipe(
      catchError((error) => {
        console.error('Error login:', error);
        throw error; // Rethrow the error to propagate it to the subscriber
      }),
    );
  }
}
