import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServ1Service {

  constructor() { }

  alertLogout(option,modalData: any) {
    return option;
  }
}