import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{

  }

  likePost():Observable<Post>{

  }

  dislikePost():Observable<Post>{
    
  }
}
