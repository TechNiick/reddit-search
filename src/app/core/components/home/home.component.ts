import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup = this.formBuilder.group({
    searchField: ['']
  })
  public posts: any = [];
  public isVeryPeriActive = false;
  constructor(
    private APIService: APIService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getSubberdit("Music").subscribe( resource => {
      this.posts = resource.data.children;
    })
  }

  mySubmit(): void {
    this.getSubberdit(this.searchForm.get('searchField')?.value).subscribe( resource => {
      this.posts = resource.data.children;
    });
  }

  getSubberdit(search_query: string): Observable<any>{
    return this.APIService.get_subreddit(search_query);
  }

  toggleVeryPeri(isActive: boolean) : void{
    this.isVeryPeriActive = isActive;
  }

}
