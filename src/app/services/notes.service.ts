import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// Cette interface permet de caractériser un objet note
interface Note {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  public notes: Note[] = [];
  public loaded: boolean = false;
  constructor(private storage: Storage) { }

  /**
  ** Chargement des notes
  **/
  load(): Promise<boolean> {

    // Création d'une nouvelle promesse pour nous permettre de décider si l'opération est OK ou NON.
    // C'est qui le PATRON ?!!!
    return new Promise((resolve) => {

      // Récupère les notes stockées en Base de données
      this.storage.get('notes').then((notes) => {

        // On ajoute les valeurs à la liste uniquement si des données existent en BDD
        if (notes != null) {
          this.notes = notes;
        }

        // État de chargement des données
        this.loaded = true;

        // L'opération est OK
        resolve(true);

      });

    });

  }

  /**
  ** Sauvegarde de la liste de toutes les notes en Base de données
  **/
  save(): void {
    this.storage.set('notes', this.notes);
  }

  /**
  ** Renvoie la note correspondante à l'identifiant id
  ** @param id
  **/
  getNote(id): Note {
    return this.notes.find(note => note.id === id);
  }

  createNote(title, content): void {

    // Création d'un identifiant unique pour la note
    let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    this.notes.push({
      id: id.toString(),
      title: title,
      content: content
    });

    this.save();

  }

  /**
  ** Suppression d'une note en fonction de son ID
  ** @param note
  **/
  deleteNote(note): void {

    // Récupération de l'index de la note dans la liste des notes
    let index = this.notes.indexOf(note);

    // Puis suppression de l'élément et Sauvegarde de la nouvelle liste
    if (index > -1) {
      this.notes.splice(index, 1);
      this.save();
    }

  }

}