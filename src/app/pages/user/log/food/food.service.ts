import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Food } from 'src/app/shared/types/food.model';

const BACKEND_URL = environment.apiUrl + '/food/';

@Injectable({ providedIn: 'root' })
export class FoodService {
    private foods: Food[] = [];
    private foodsUpdated = new Subject<{ foods: Food[]; }>();

    constructor(private http: HttpClient, private router: Router) { }

    getPosts(keyword: string) {
        const queryParams = `?keyword=${keyword}`;
        this.http.get<{ message: string; posts: any; }>(
            BACKEND_URL + queryParams
        ).pipe(map(postData => {
            return {
                posts: postData.posts.map(post => {
                    return {
                        Tagname: post.Tagname,
                        PROT: post.PROT,
                        FAT: post.FAT,
                        CARB: post.CARB
                    };
                }),
            };
        })).subscribe(transformedPostData => {
            this.foods = transformedPostData.posts;
            this.foodsUpdated.next({
                foods: [...this.foods]
            });
        });
    }

    getPostUpdateListener() {
        return this.foodsUpdated.asObservable();
    }

    getPost(id: string) {
        return this.http.get<{
            _id: string;
            title: string;
            description: string;
            content: string;
        }>(BACKEND_URL + id);
    }

    getSuggetion(keyword: string) {
        console.log("getsuggestion");
        // let url = 'https://api.nal.usda.gov/fdc/v1/search?api_key=CcyAqTeSBH5HOpiNMAIMpRw9tWDdmq5Qp9yKX14I&location=Denver+CO'
        // return this.http.get(url);
        let headers = new HttpHeaders();
        headers.append("Authorization", `Basic ${environment.apiKey}`);
        headers.append("Content-Type", 'application/json');

        let url = `https://api.nal.usda.gov/fdc/v1/search`;
        return this.http.post(
            url,
            { "generalSearchInput": "Cheddar cheese" },
            {
                withCredentials: true,
                headers: headers
            }
        );
        // const queryParams = `?keyword=${keyword}`;
        // return this.http.get<{ message: string; posts: any; }>(
        //     BACKEND_URL + 'suggest/' + queryParams
        // ).pipe(map(postData => postData.posts.map((post: { _source: Food; }) => post._source)));
    }

    // addPost(post: Post) {
    //     this.http.post<{ message: string; post: Post }>(
    //         BACKEND_URL,
    //         post
    //     ).subscribe(responseData => {
    //         this.router.navigate(['/']);
    //     });
    // }

    /*updatePost(id: string, title: string, content: string, image: File | string) {
      let postData: Post | FormData;
      if (typeof image === 'object') {
        postData = new FormData();
        postData.append('id', id);
        postData.append('title', title);
        postData.append('content', content);
        postData.append('image', image, title);
      } else {
        postData = {
          id,
          title,
          content,
          imagePath: image,
          creator: null
        };
      }
      this.http
        .put(BACKEND_URL + id, postData)
        .subscribe(response => {
          this.router.navigate(['/']);
        });
    }*/

    // deletePost(postId: string) {
    //     return this.http.delete(BACKEND_URL + postId);
    // }
}
