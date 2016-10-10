import { Observable } from 'rxjs/Observable';

export interface Profile {
        name: Observable<string> | string;
  pictureUrl: Observable<string> | string;
        role: Observable<string> | string;
}

export interface ProfileStats {
       open: Observable<number> | number;
  completed: Observable<number> | number;
   reunited: Observable<number> | number;
}