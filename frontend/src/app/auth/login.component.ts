import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./auth.scss'],
  providers: [AuthService]
})

export class LoginComponent {

  email: string;
  password: string;
  constructor( private router: Router,
               private authService: AuthService ) { }


  login(): void {
    this.authService.login<{token: string}>(this.email, this.password).subscribe(
      session => {
        localStorage.setItem('token', session.token);
        console.log(session);
        this.router.navigate(['users']);
      }
    );
  }

}
