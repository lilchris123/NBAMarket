import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly apiUrl: string = 'http://localhost:8080';

}
