import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameApiService {

  constructor(private http: HttpClient) { }

  getPriceFileNames(): Observable<string[]> {
      return this.http.get<string[]>('/api/priceNames');
  }

  getStandardDiscountFileNames(): Observable<string[]> {
      return this.http.get<string[]>('/api/standardDiscountNames');
  }

  getSpecialDiscountFileNames(): Observable<string[]> {
      return this.http.get<string[]>('/api/specialDiscountNames');
  }

  getAidsListFileNames(): Observable<string[]> {
      return this.http.get<string[]>('/api/aidsListNames');
  }
}
