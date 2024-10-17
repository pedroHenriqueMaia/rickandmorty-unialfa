import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  searchName: string = '';
  searchPlanet: string = '';
  selectedStatus: string = ''; 


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.apiService.getAllCharacters().subscribe((data) => {
      console.log(data);
      this.characters = data.results;
    });
  }

  search(): void {
    this.apiService.searchCharacters(this.searchName, this.searchPlanet).subscribe((data) => {
      this.characters = data.results;
    });
  }
}
