import {Component, EventEmitter, Output} from '@angular/core';
import { style } from '@angular/animations';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms'

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
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    //console.log("title : " + post.title);
    //console.log("content: " + post.content);
    this.postCreated.emit(post);
  }
}
