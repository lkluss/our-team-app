import { Component, OnInit, Input } from '@angular/core';
import { ImageSizeEnum } from 'src/app/models/ImageSizeEnum';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.less']
})
export class ImageBoxComponent implements OnInit {

  @Input() url: string;
  @Input() imageSize: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  getClassName(){
    return `image fit-${this.imageSize}`;
  }

}
