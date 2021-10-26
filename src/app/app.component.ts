import { Component } from '@angular/core';
import alunosData from './alunos'; // Carregamento dos alunos


@Component({
  selector: 'app-root', // seletor
  templateUrl: './app.component.html', // template HTML visual
  styleUrls: ['./app.component.css'] // estilos CSS
})

export class AppComponent {
  // Atributo para armazenar os alunos
  alunos = alunosData;
}
