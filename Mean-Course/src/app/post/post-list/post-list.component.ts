import { Component, Input } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  //posts = [
  //  { title: "First", content: "This is my first\'s post" },
  //  { title: "Second", content: "This is my second\'s post" },
  //  { title: "Third", content: "This is my third\'s post" },
  //  { title: "Fourth", content: "This is my fourth\'s post" }
  //]
  @Input() posts: Post [] = [];
}
