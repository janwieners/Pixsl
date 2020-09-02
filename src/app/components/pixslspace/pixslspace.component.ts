import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';

declare var randomColor: any;

export interface IColorHash {
  [symbol: string]: string;
}

@Component({
  selector: 'app-pixslspace',
  templateUrl: './pixslspace.component.html',
  styleUrls: ['./pixslspace.component.scss']
})
export class PixslspaceComponent implements OnInit {

  private colors: string[];
  public colorCodes: IColorHash = {};
  public text: string[];
  private unique: string[];

  constructor(public data: DataService) {
  }

  ngOnInit(): void {
    this.data.dataUpdated.subscribe(() => {
        this.text = this.data.getProcessedText();
        this.unique = this.data.getUniqueChars();

        this.colors = randomColor({
          count: this.unique.length
        });

        let i = 0;
        this.unique.forEach((char) => {
          this.colorCodes[char] = this.colors[i++];
        });
      }
    );
  }

}
