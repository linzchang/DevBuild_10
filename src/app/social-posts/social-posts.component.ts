import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/models/post.model';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  postList: PostModel[];
  viewForm: boolean = false;
  addSubject: string;
  addBody: string;
  newPost: PostModel;

  ngOnInit() {
    this.postList = [
      { subject: "Dog", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
      { subject: "Cat", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
      { subject: "Fish", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." }
    ];
  }

  addPost(subject: string, body: string) {
    this.newPost = { subject: subject, body: body };
    this.postList.unshift(this.newPost);
  }

  removePost(index: number) {
    this.postList.splice(index, 1);
  }

}
