import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatPaginatorModule,
    BrowserModule
  ]
})
export class MaterialModule { }
