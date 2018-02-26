import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  mock_authors = [
    {name: 'Author1', book: 'Angular'},
    {name: 'Author2', book: 'Angular'},
    {name: 'Author3', book: 'Angular'}
  ]

  constructor() { }

  GetAuthors(){
    return this.mock_authors;
  }
}
