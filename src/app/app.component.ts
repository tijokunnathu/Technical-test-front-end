import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'westpac-tech';
  posts: Post[] = [];

  constructor(private appservice: AppService){  }

  ngOnInit(): void {
    this.appservice.getPosts().subscribe(posts => {
      this.posts = posts;
    }, error => console.log(error));
  }

}
