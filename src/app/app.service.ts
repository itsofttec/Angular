import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {employee} from './business/employee/employee';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

	private URL = 'http://localhost:8080/employee?unicity=trigramme';

    constructor(private http: HttpClient) {
    }

    getEmployees() {
        return this.http
      .get<employee[]>(this.URL)
      .pipe(map(data => data));
    }
}
