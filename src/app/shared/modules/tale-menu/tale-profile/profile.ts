import { Observable } from 'rxjs/Observable';

export interface Profile {
        name: Observable<string>       | string;
  pictureUrl: Observable<string>       | string;
        role: Observable<string>       | string;
     appeals: Observable<Object>       | Object;
       fbuid: Observable<string>       | string;
     regions: Observable<string[]>     | string[];
       stats: Observable<ProfileStats> | ProfileStats;
}

export interface ProfileStats {
       open: Observable<number> | number;
  completed: Observable<number> | number;
   reunited: Observable<number> | number;
}