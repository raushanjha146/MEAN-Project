import { Component, OnInit, OnDestroy } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Post } from '../post.model'
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  //posts = [
  //  { title: "First", content: "This is my first\'s post" },
  //  { title: "Second", content: "This is my second\'s post" },
  //  { title: "Third", content: "This is my third\'s post" },
  //  { title: "Fourth", content: "This is my fourth\'s post" }
  //]
  posts: Post [] = [];
  private postsSub: Subscription;

  //postsService: PostsService;
  constructor(public postsService: PostsService){}
    //this.postsService=postsService;
    ngOnInit(){
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }

    onDelete(postId: string){
      this.postsService.deletePost(postId);
    }
    ngOnDestroy(){
      this.postsSub.unsubscribe();
    }
}
