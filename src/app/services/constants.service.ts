import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly baseUrl: string = 'http://localhost:8080';
  readonly API_ENDPOINT = 'http://localhost:8080/api';
  readonly playersUrl= this.API_ENDPOINT + '/players';
  readonly teamsUrl= this.API_ENDPOINT + '/teams';
  readonly ordersUrl = this.API_ENDPOINT + '/orders';

}
