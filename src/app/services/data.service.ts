import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public loadTextFile(url: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      this.http.get(url, {responseType: 'text'}).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
