import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  recipeDetails: any;

  constructor(
    private route: ActivatedRoute,
    private spoonacularService: SpoonacularService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('ID da receita:', id);  // Adicione esse log para verificar
    if (id) {
      this.spoonacularService.getRecipeDetails(id).subscribe(
        (data) => {
          this.recipeDetails = data;
          console.log('Detalhes da receita:', data);  // Verifique o retorno da API
        },
        (error) => {
          console.error('Erro ao carregar os detalhes da receita:', error);
        }
      );
    } else {
      console.error('ID não encontrado');
    }
  }
  
}
