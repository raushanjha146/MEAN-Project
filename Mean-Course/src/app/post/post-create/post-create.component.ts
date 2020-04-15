import {Component} from '@angular/core';
import { style } from '@angular/animations';
import { NgForm } from '@angular/forms'
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{

 // enteredValue = '';                        //19. Getting User Input
  enteredTitle = '';
  enteredContent = '';
  //newPost = 'No Content';

  constructor(public postsService: PostsService){}

  onSavePost(form: NgForm){
    //alert('Post saved !!');
    //console.log(postInput);
    //console.dir(postInput);
    //this.newPost = "This is user\'s post";
    //this.newPost = postInput.value;
    //this.newPost = this.enteredValue;           //19. Getting User Input

    if(form.invalid)
    {
      return;
    }
    //console.log("title : " + post.title);
    //console.log("content: " + post.content);
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
