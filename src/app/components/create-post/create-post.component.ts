import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  @Input() post!:Post;


}
