import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === 'Avanish' && password === '12345') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
  }

  ifUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticateUser');

  }

}
