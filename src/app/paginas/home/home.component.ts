import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  currentIndex: number = 0;

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit(): void {

    this.spoonacularService.getPopularRecipes().subscribe(
      (data) => {
        console.log('Receitas carregadas:', data);
        this.recipes = data.results || []; 
      },
      (error) => {
        console.error('Erro ao carregar receitas:', error);
      }
    );
  }


  updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    carouselInner.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }


  next() {
    this.currentIndex = (this.currentIndex + 1) % this.recipes.length;
    this.updateCarousel();
  }


  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.recipes.length) % this.recipes.length;
    this.updateCarousel();
  }
}