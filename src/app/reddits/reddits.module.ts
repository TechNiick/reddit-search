import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule
  ],
  exports: [
    PostComponent,
    PostListComponent
  ]
})

export class RedditsModule {}
