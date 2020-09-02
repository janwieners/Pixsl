import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rawText: string;
  private processedText: string[];
  private uniqueChars: string[];
  public dataUpdated = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  private unique(input: string): string[] {
    return input.split('')
      .filter((n, i) => input.indexOf(n) === i);
  }

  private cleanup(input: string): string {
    return input.replace(/(\r\n|\n|\r)/gm, '');
    // return input.replace(/(\r\n|\n|\s|\r)/gm, '');
  }

  public loadTextFile(url: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      this.http.get(url, {responseType: 'text'}).subscribe(data => {
        this.rawText = data;
        this.processedText = this.cleanup(data).split('');
        this.uniqueChars = this.unique(this.cleanup(data));
        this.dataUpdated.emit(data);
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  public getRawText(): string {
    return this.rawText;
  }

  public getProcessedText(): string[] {
    return this.processedText;
  }

  public getUniqueChars(): string[] {
    return this.uniqueChars;
  }

}
