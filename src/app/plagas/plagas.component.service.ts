import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class PlagasComponentService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private loginService: LoginService) {}

  agregarImagen(data: any): Observable<any> {
    const token = this.loginService.getToken();
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    console.log(data);

    return this.http
      .post<any>(`${this.apiUrl}/plagas/plagas/predict/`, data, { headers })
      .pipe(tap((resp) => resp));
  }
}
