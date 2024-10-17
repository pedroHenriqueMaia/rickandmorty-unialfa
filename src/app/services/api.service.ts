import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  searchCharacters(name?: string, planet?: string): Observable<any> {
    let query = `${this.apiUrl}/character?`;
    if (name) query += `name=${name}&`;
    if (planet) query += `origin=${planet}`;
    return this.http.get(query);
  }
}
