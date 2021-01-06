import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../services/notes.service';


// Cette interface permet de caractériser un objet note
interface Note {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  note: Note;
  constructor(private route: ActivatedRoute ,private router: Router, public notesService: NotesService) {
    // Initialisation d'une note à vide
    this.note = {
      id: '',
      title: '',
      content: ''
    };
  }

  ngOnInit() {
    // On récupère l'identifiant de la
    let noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.notesService.getNote(noteId);
  }

  deleteNote() {
    // Redirection vers la page d'accueil
    this.notesService.deleteNote(this.note);
    this.router.navigate(['/home']);
  }


}
