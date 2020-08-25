import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export class HelloWorldBean {
  constructor(public message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/welcome/Avanish');

  }

  executeHelloWorldBeanServiceWithPathvariable(name) {
    let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers=new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/welcome/${name}`,{headers});

  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Avanish'
    let password = 'qwerty'
    let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
