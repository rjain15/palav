
import {
  Component,
  OnInit
} from '@angular/core';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']

})

export class VideoComponent implements OnInit {

  private id: string = 'qDuKsiwS5xw';
  p: YT.Player;
  done = false;

  youtubelink: string = 'https://www.youtube.com/embed/videoseries?list=PLbTNZNtSmrpoUVan0LVqTP3qu_9_aMr6P';

  constructor() {

    this.p = new YT.Player('player', {
        height: 390,
        width: 640,
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onStateChange
        }
    });
  }

  ngOnInit() {

  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
  // 4. The API will call this function when the video player is ready.
  onPlayerReady(event) {
    event.target.playVideo();
  }
  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }

  stopVideo() {
    this.p.stopVideo();
  }

}
