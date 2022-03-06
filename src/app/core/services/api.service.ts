import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

const reddit_url = 'https://www.reddit.com/'

@Injectable({
  providedIn: 'root',
})
export class APIService {

  constructor(private http: HttpClient) {}

  get_subreddit(subreddit: string): Observable<any>{
    return this.http.get(`${reddit_url}r/${subreddit}/top.json?limit=10`);
  }

}
