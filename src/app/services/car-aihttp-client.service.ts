import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
	
})
export class CarAIHttpClientService {

	baseUrl = 'https://CarAi.com/';

	constructor(private httpClient: HttpClient) { }


	public post<T>(url: string, body: any): Observable<T> {
		return this.httpClient.post<T>(this.baseUrl + url, body);
	}
}
