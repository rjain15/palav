import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  youtubelink:string = 'https://www.youtube.com/embed/videoseries?list=PLbTNZNtSmrpoUVan0LVqTP3qu_9_aMr6P';
  constructor() { }

  ngOnInit() {
  }

}
