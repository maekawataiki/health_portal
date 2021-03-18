import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Record } from 'src/app/shared/types/record.model';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/record/';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private record: Record;
  private records: Record[] = [];
  private recordUpdated = new Subject<{ record: Record }>();
  private recordsUpdated = new Subject<{ records: Record[] }>();

  constructor(private http: HttpClient) { }

  getRecords(keyword: string) {
    const queryParams = `?keyword=${keyword}`;
    this.http.get<{ message: string; posts: any; }>(
      BACKEND_URL + queryParams
    ).pipe(map(postData => {
      return {
        posts: postData.posts.map(post => {
          return {
            owner: post.owner,
            date: post.date,
            data: post.data,
          };
        }),
      };
    })).subscribe(transformedRecordData => {
      this.records = transformedRecordData.posts;
      this.recordsUpdated.next({
        records: [...this.records]
      });
    });
  }

  getRecordUpdateListener() {
    return this.recordUpdated.asObservable();
  }
  
  getRecordsUpdateListener() {
    return this.recordsUpdated.asObservable();
  }

  getRecord(date: Date) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      content: string;
    }>(BACKEND_URL + date);
  }

  // addRecord(post: Record) {
  //     this.http.post<{ message: string; post: Record }>(
  //         BACKEND_URL,
  //         post
  //     ).subscribe(responseData => {
  //         this.router.navigate(['/']);
  //     });
  // }

  updateRecord(record: Record) {
    this.http
      .put(BACKEND_URL + record._id, record)
      .subscribe(response => {
        // this.router.navigate(['/']);
      });
  }

  // deleteRecord(postId: string) {
  //     return this.http.delete(BACKEND_URL + postId);
  // }
}
