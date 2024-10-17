import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  searchName: string = '';
  searchPlanet: string = '';
  selectedStatus: string = ''; 
  currentPage: number = 1;
  loading: boolean = false;
  finished: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(page: number = this.currentPage): void {
    if (this.loading || this.finished) return;
    this.loading = true;

    this.apiService.getAllCharacters(page).subscribe((data) => {
      this.characters.push(...data.results);
      this.currentPage++;
      this.loading = false;

      this.finished = this.currentPage > data.info.pages;
    });
  }

  search(): void {
    this.apiService.searchCharacters(this.searchName, this.searchPlanet).subscribe((data) => {
      this.characters = data.results;
      this.currentPage = 1;
      this.finished = false;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 200;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
      this.getAllCharacters();
    }
  }
}
