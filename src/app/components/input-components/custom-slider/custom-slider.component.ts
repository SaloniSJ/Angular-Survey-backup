import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Option } from '../../../core/question/option';
import { Options } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styles: [],
})
export class CustomSliderComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  value: number = 123;
  sliderOptions: Options = {
    floor: 0,
    ceil: 250
  };

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  
  ngOnInit(): void {
    console.log(this.option)
  }
}
