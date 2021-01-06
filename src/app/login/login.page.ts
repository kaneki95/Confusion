import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  /**
  ** Permet de stocker l'état de connexion + Redirection vers la page d'accueil
  **/
 login() {

  // Sauvegarde de l'état de connexion
  this.storage.set('userAuthenticated', true);

  // Redirection vers la page d'accueil
  this.router.navigate(['/home']);
}

}
