import { Component, OnInit, HostListener } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit{
  
  isLoading:boolean = false;
  posts:Post[] = [];
  limit:number = 4;
  page:number = 1;
  totalPosts:number = 0;
  counter = 0

constructor(private feedService:FeedService){}

  ngOnInit(): void {
   this.loadPosts()
   
  }

  @HostListener('document:scroll',['$event'])
  onScroll(event:any){
    const scrollPosition =  window.innerHeight + window.scrollY
    const threshold = document.body.scrollHeight - 100
    
    if(scrollPosition >= threshold){
     
      this.loadMore()
    }
  }

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    
    this.counter++;
  }

  loadPosts():void{
    this.isLoading = true;
    this.feedService.getPosts(this.page, this.limit).subscribe({
      next: res =>{
       
        this.posts = [...this.posts, ...res.posts];
        this.totalPosts = res.totalCount;
        this.isLoading = false;
        console.log(this.posts.length)
        console.log(this.totalPosts)
      }
    });
  }

  loadMore(){
    if(this.posts.length < this.totalPosts){
      this.page++;
      this.loadPosts();
    }
  }



}
