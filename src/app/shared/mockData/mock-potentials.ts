import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let potentials = [
        {
          "_pid": 0,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "First",
          "timestamp": 1474289940,
          "contentBody": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
          "contentImageUrl": "http://placehold.it/240x240",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "regionLong": "South West",
          "tags": ["important"]
        },
        {
          "_pid": 1,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Second",
          "timestamp": 1474289939,
          "contentBody": "Lorem ipsum",
          "contentImageUrl": "http://placehold.it/240x240",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "nw",
          "regionLong": "North West",
          "tags": ["important"]
        },
        {
          "_pid": 2,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Third",
          "timestamp": 1474289938,
          "contentBody": "Lorem ipsum",
          "contentImageUrl": "http://placehold.it/240x240",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "regionLong": "South West",
          "tags": ["important"]
        },
        {
          "_pid": 3,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "Fourth",
          "timestamp": 1474289937,
          "contentBody": "Lorem ipsum",
          "contentImageUrl": "http://placehold.it/240x240",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "regionLong": "South West",
          "tags": ["important"]
        }
    ];
    
    return {potentials};
  }
}