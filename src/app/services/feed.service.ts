import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPosts(page:number, limit:number):Observable<{posts:Post[], totalCount:number}>{
    const url = `${this.apiUrl}?_page=${page}&_limit=${limit}`
    return this.http.get<Post[]>(url, {observe: 'response'}).pipe(
      map((response:HttpResponse<Post[]>) =>({
        posts: response.body as Post[] ,
        totalCount: 40
      }))
    )
  }

  likePost(post:Post):Observable<Post>{
    const updatedPost = {likes: post.likes + 1};
    return this.http.patch<Post>(`${this.apiUrl}/${post.id}`, updatedPost)
  }

  dislikePost(post:Post):Observable<Post>{
    const updatedPost = {likes: post.likes - 1};
    return this.http.patch<Post>(`${this.apiUrl}/${post.id}`, updatedPost)
  }
}
