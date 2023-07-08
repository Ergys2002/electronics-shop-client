import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SignUpComponent implements OnInit{
  signUpData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  saveUser() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>('http://localhost:8080/api/users/sign-up', this.signUpData, { headers }).subscribe(
      response => {
        // Handle the response from the API
        console.log(response);
      },
      error => {
        // Handle any errors
        console.error(error);
      }
    );
  }



  ngOnInit(): void {
  }



}
