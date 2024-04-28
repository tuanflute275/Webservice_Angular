import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_API = 'http://localhost:8081/BE_WEBSERVICE/api/product';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    const url = `${this.URL_API}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public findAllCategory(): Observable<any> {
    const url = `${this.URL_API}/category`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public findByCategory(categoryId: number): Observable<any> {
    const url = `${this.URL_API}/category/${categoryId}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public findById(id: number): Observable<any> {
    const url = `${this.URL_API}/` + id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public search(keyword: any): Observable<any> {
    const url = `${this.URL_API}/searchByName/${keyword}`;
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public save(data: any): Observable<any> {
    const url = `${this.URL_API}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }
  public update(data: any): Observable<any> {
    const url = `${this.URL_API}`
    return this.httpClient.put<any>(url, data, this .httpOptions)
  }
  public delete(id: number): Observable<any> {
    const url = `${this.URL_API}/` + id
    return this.httpClient.delete<any>(url, this.httpOptions)
  }
}
