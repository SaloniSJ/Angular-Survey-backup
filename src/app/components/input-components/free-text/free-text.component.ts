import { Component, OnInit } from '@angular/core';
import { Option } from '../../../core/question/option';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-free-text',
  templateUrl:'./free-text.component.html' ,
  styles: [],
})
export class FreeTextComponent implements OnInit {
  option: Option;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
