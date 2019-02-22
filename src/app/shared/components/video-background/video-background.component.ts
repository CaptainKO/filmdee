import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  title = 'Anh Da Đen Hai Súng: Đức Nhọ (2019)';
  content = 'Ngày xửa ngày xưa có mụ bán dưa, mụ ngồi mụ địt, có mụ bán bịch mụ ngồi mụ ngửi, có mụ bán bưởi mụ ngồi mụ chửi.';

  @ViewChild("video") video: ElementRef;
  constructor() {
    this.playDelay();
  }

  checkMuted = true;
  checkEnd: boolean;
  setTime: any;
  check_index: boolean = true;

  ngOnInit() {
  }

  vidEnd() {
    this.checkEnd = true;
    this.check_index = true;
    this.video.nativeElement.load();
  }

  muted() {
    this.video.nativeElement.muted = !this.video.nativeElement.muted;
    this.checkMuted = this.video.nativeElement.muted;
    console.log(this.checkMuted);
    // alert(this.video.nativeElement.muted);
    // return this.video.nativeElement.muted;
  }
  replay() {
    this.video.nativeElement.play();
    this.checkEnd = false;
    console.log(this.checkEnd);
    this.check_index = false;
  }

  playDelay(){
    this.setTime = setTimeout(() => {
      this.video.nativeElement.play();
      clearTimeout(this.setTime);
      this.check_index = false;
    }, 3000);
  }
}
