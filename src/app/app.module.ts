import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
