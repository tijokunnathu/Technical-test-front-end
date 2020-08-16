import { environment } from './../environments/environment';
import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  public getPosts(): Observable<Post[]> {
    const url = environment.url + '/v1/posts';
    return this.http.get<Post[]>(url);
  }

}
