import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corp-video-player',
  template: `
    <youtube-player [videoId]="videoId"></youtube-player>
  `,
  styles: [
  ]
})
export class VideoPlayerComponent implements OnInit {
  private apiLoaded = false;

  @Input() videoId: string;

  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
