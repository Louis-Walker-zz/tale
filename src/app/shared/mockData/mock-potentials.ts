import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let potentials = [
        {
          "_id": 0,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "First",
          "timestamp": 1474289940,
          "content": "Lorem ipsum",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "tags": ["important"]
        },
        {
          "_id": 1,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Second",
          "timestamp": 1474289939,
          "content": "Lorem ipsum",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "nw",
          "tags": ["important"]
        },
        {
          "_id": 2,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Third",
          "timestamp": 1474289938,
          "content": "Lorem ipsum",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "tags": ["important"]
        },
        {
          "_id": 3,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Fourth",
          "timestamp": 1474289937,
          "content": "Lorem ipsum",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "tags": ["important"]
        }
    ];
    
    return {potentials};
  }
}