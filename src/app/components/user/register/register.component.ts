import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email: string;
  public password: string;

  ngOnInit() {
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['admin/list-books']);
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        console.log('resUser', res);
        this.onLoginRedirect();
      }).catch(err => this.onLoginError(err));
  }

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        console.log('resUser', res);
        this.onLoginRedirect();
      }).catch(err => this.onLoginError(err));
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/list-books']);
  }

  onLoginError(err): void{
    console.log('err', err);
  }

}
