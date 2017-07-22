import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  youtubelink:string = 'https://www.youtube.com/embed/wdY2bEh9XbE?list=PL7hPeebx3kz3VVLUWdChx0KG6PWyKddk4';
  constructor() { }

  ngOnInit() {
  }

}
