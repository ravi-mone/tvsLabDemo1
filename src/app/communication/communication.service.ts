import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
@Injectable()
export class CommunicationService {

  public results: string[];

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  public getResources(lang): Observable<any> {
    return this.http.get(`http://localhost:3004/api/${lang}`)
        .map((response: Response) => {
             return response;
        });
  }

    public setResources(id, lang, userObj) {
        return this.http.put(`http://localhost:3004/api/${lang}/${id}`, userObj)
            .map((response:any) => {
                console.log('RESPONSE:', response)
                return response;
            });
    }

}


