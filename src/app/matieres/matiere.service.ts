import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environnements/environnement";
import {Observable} from "rxjs/Rx";
import {Matiere} from "./matieres.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class MatiereService {
  constructor(private http: HttpClient) { }

  getMatiere(): Observable<Matiere[]> {
    return  this.http.get<Matiere[]>(`/matieres`);
  }

  createMatiere(body): Observable<Matiere> {
    return this.http.post<Matiere>(`/matieres`, body);
  }

  deleteMatiere(id): Observable<number> {
    return this.http.post<Matiere>(`/matieres/delete`, {'id': id})
      .pipe(map(response => id));
  }
}