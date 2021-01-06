import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    notes: { id: number, title: string, content: string }[] = [
      { "id": 1, "title": "Faire les courses", "content": "Acheter de quoi faire une bonne raclette. Diversifier les types de fromages." },
      { "id": 2, "title": "Faire du sport", "content": "Pensez à bien m'étirer avant de commencer, pour éviter toute courbature ou fracture." },
      { "id": 3, "title": "IUT", "content": "Préparer la soutenance de stage et contacter mon tuteur." }
    ];

  constructor() { }

  ngOnInit() {
  }

  getNoteById(id) {
    return this.notes.filter(note => note.id = id);
  }
  
}
