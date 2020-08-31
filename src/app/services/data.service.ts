import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // dataUpdated = new EventEmitter();

  public textFile = '';

  constructor(private http: HttpClient) {
  }

  public getTextFileContent(): string {
    return this.textFile;
  }

  public loadTextFile(url: string): Promise<any> {

    return new Promise<string>((resolve, reject) => {

      this.http.get(url, {responseType: 'text'}).subscribe(data => {

        this.textFile = data;
        // this.dataUpdated.emit(data);
        resolve(data);
      }, error => {

        reject(error);
      });
    });
  }
}
