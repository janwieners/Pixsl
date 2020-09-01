import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-textview',
  templateUrl: './textview.component.html',
  styleUrls: ['./textview.component.scss']
})
export class TextviewComponent implements OnInit {

  public text: string = '';

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.loadTextFile('assets/data/goethe_italienische-reise_01.txt').then((data) => {
      this.text = data;
    });
  }

}
