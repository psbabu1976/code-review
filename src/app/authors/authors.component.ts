import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  Authors: any = [];

  constructor(private authServ: AuthorsService) {
    this.Authors = this.authServ.GetAuthors();
  }

  ngOnInit() {

  }

}
