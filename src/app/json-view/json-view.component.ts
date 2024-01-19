import { Component } from '@angular/core';
import {JsonService} from "../json.service";

@Component({
  selector: 'app-json-view',
  templateUrl: './json-view.component.html',
  styleUrl: './json-view.component.css'
})
export class JsonViewComponent {
  jsonData: any;

  constructor(private jsonService: JsonService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;
    });
  }
}
