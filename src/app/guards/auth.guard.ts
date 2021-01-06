import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Dans le constructeur on déclare notre variable de routage
  constructor(private router: Router ,private storage: Storage) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // let userAuthenticated = true; // Pour le moment nous allons garder cette valeur à false

       // On récupère la valeur de userAuthenticated en BDD
    return this.storage.get('userAuthenticated').then((userAuthenticated) => {
      if (userAuthenticated) {
        // Déjà connecté : on redirige l'utilisateur vers la page d'accueil
        return true;
      } else {
        // return false;
        // Non connecté : on redirige l'utilisateur vers la page de Login
        this.router.navigate(['/login']);
      }
    });

  }
   
}
