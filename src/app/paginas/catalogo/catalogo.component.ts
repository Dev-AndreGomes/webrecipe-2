import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  recipes: any[] = [];

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
    this.spoonacularService.getPopularRecipes().subscribe(
      (data) => {
        console.log('Receitas carregadas:', data);
        this.recipes = data.results || [];
      },
      (error) => console.error('Erro ao carregar receitas:', error)
    );
  }
}
