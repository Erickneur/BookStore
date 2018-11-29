import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      console.log('resUser', res);
      this.onLoginRedirect();
    }).catch(err => this.onLoginError(err));
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

  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/list-books']);
  }

  onLoginError(err): void{
    console.log('err', err);
  }
}
