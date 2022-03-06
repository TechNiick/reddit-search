import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public isActive = false;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

  togglePost(): void {
    this.isActive = this.data.selftext.length ? !this.isActive: this.isActive;
  }

}
