import { Component } from '@angular/core';

@Component({
  selector: 'tale-potentials',
  templateUrl: 'tale-potentials.component.html',
  styleUrls: ['tale-potentials.component.css']
})
export class PotentialsComponent {
  potentials: Object;

  constructor() {
    this.potentials = {
      "3874983754923": {
        "_id": 0,
        "lead": {
          "name": "Lost and Found UK",
          "url": "http://facebook.com",
          "picture": "http://placehold.it/72x72",
          "followers": "30,000"
        },
        "author": "Steve Rogers",
        "timestamp": "1474289940",
        "content": "Lorem ipsum",
        "stats": {
          "likes": 32,
          "shares": 4
        },
        "region": "sw",
        "tags": ["important"]
      },
      "3874983754924": {
        "_id": 1,
        "lead": {
          "name": "Lost and Found UK",
          "url": "http://facebook.com",
          "picture": "http://placehold.it/72x72",
          "followers": "30,000"
        },
        "author": "Steve Rogers",
        "timestamp": "1474289940",
        "content": "Lorem ipsum",
        "stats": {
          "likes": 32,
          "shares": 4
        },
        "region": "sw",
        "tags": ["important"]
      }
      ,
      "3874983754925": {
        "_id": 2,
        "lead": {
          "name": "Lost and Found UK",
          "url": "http://facebook.com",
          "picture": "http://placehold.it/72x72",
          "followers": "30,000"
        },
        "author": "Steve Rogers",
        "timestamp": "1474289940",
        "content": "Lorem ipsum",
        "stats": {
          "likes": 32,
          "shares": 4
        },
        "region": "sw",
        "tags": ["important"]
      }
      ,
      "3874983754926": {
        "_id": 3,
        "lead": {
          "name": "Lost and Found UK",
          "url": "http://facebook.com",
          "picture": "http://placehold.it/72x72",
          "followers": "30,000"
        },
        "author": "Steve Rogers",
        "timestamp": "1474289940",
        "content": "Lorem ipsum",
        "stats": {
          "likes": 32,
          "shares": 4
        },
        "region": "sw",
        "tags": ["important"]
      }
    }
  }

}
