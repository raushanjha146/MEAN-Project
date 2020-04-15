import {Component, EventEmitter, Output} from '@angular/core';
import { style } from '@angular/animations';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{

 // enteredValue = '';                        //19. Getting User Input
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  //newPost = 'No Content';


  onSavePost(){
    //alert('Post saved !!');
    //console.log(postInput);
    //console.dir(postInput);
    //this.newPost = "This is user\'s post";
    //this.newPost = postInput.value;
    //this.newPost = this.enteredValue;           //19. Getting User Input

    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    //console.log("title : " + post.title);
    //console.log("content: " + post.content);
    this.postCreated.emit(post);
  }
}
