import { Injectable } from '@angular/core';

@Injectable()
export class FilterOptionsService {

  constructor() { }

  getEnabled(): string[] {
    let placeholder: string[] = ["sw", "nw"];
    
    return placeholder;
  }
}
