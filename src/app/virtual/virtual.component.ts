import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport; //referencia al elemento cdk-virtual-scroll-viewport del html

  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
  }

  goEnd(){
    this.viewport.scrollToIndex(this.personas.length);
  };

  goStart(){
    this.viewport.scrollToIndex(0);
  };

  goMiddle(){
    this.viewport.scrollToIndex(this.personas.length/2);
  }

}
