import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColumnsService {

  constructor(private httpClient: HttpClient) { }

  getColumns(): Observable<any> {

    return this.httpClient.get('http://localhost:8080/cool-cars');
  }

}
