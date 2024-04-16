import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = 'https://your-backend.com/api/donations';

  constructor(private http: HttpClient) { }

  postDonation(donation: any): Observable<any> {
    return this.http.post(this.apiUrl, donation);
  }
}
