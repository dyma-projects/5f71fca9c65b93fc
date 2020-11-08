import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  
  public addUser(nom: string) {  
    const list = this.users.value;
    if (list.indexOf(nom) == -1)  { // rajout d'un test pour unicite du nom dans la liste
    list.push(nom);   
    }
  }
  constructor() { }
}
