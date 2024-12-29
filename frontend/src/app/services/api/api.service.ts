import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    testApi(): Observable<any> {
        return this.http.get('/api/test');
    }

    uploadFile(files: { file: File, destination: string }[]): Observable<any> {
        const formData = new FormData();
        files.forEach(item => {
            formData.append('files', item.file, item.file.name);
            formData.append('destinations', item.destination);
        });
        return this.http.post('/api/upload', formData);
    }
}
