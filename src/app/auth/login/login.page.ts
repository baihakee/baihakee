import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('emailInput') username;
  @ViewChild('PasswordInput') password;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  async login() {
    const user = this.username.value;
    const pass = this.password.value;
    // eslint-disable-next-line eqeqeq
    if (user == 'admin' && pass == '1234') {
      this.router.navigate(['/home',]);
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Username or Password is not correct.',
        buttons: ['Close'],
      });
      await alert.present();
    }
  }
}
