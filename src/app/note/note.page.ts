import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// Cette interface permet de caractériser un objet note
interface Note {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  notes: { id: number, title: string, content: string }[] = [
    { "id": 1, "title": "Faire les courses", "content": "Acheter de quoi faire une bonne raclette. Diversifier les types de fromages." },
    { "id": 2, "title": "Faire du sport", "content": "Pensez à bien m'étirer avant de commencer, pour éviter toute courbature ou fracture." },
    { "id": 3, "title": "IUT", "content": "Préparer la soutenance de stage et contacter mon tuteur." }
  ];

  note: Note;
  constructor(private route: ActivatedRoute) {
    // Initialisation d'une note à vide
    this.note = {
      id: 1,
      title: '',
      content: ''
    };
  }

  ngOnInit() {
    // On récupère l'identifiant de la
    let noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.getNoteById(noteId);
  }

  /**
  ** Renvoie une note en fonction de son identifiant
  ** @param id : identifiant de la note
  **/
  getNoteById(id) {
    // La méthode find va rerchercher la première note dont l'identifiant est égal à id
    return this.notes.find(function(note) {
      return note.id == parseInt(id);
    });
  }

}
