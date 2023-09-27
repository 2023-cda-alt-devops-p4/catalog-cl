import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DiagramData } from '../models/diagramData';

@Injectable({
  providedIn: 'root',
})
export class DiagramService {
  private jsonUrl = '/assets/diagrams.json';

  constructor(private http: HttpClient) {}

  /* ALL DATA */
  getDiagramData(): Observable<DiagramData> {
    return this.http.get<DiagramData>(this.jsonUrl);
  }

  /* UML DIAGRAMS */
  getUmlDiagramById(id: number): Observable<any | undefined> {
    return this.getDiagramData().pipe(
      map((data) => data.umlDiagrams.find((diagram) => diagram.id === id))
    );
  }

  /* MERISE DIAGRAMS */
  getMeriseDiagramById(id: number): Observable<any | undefined> {
    return this.getDiagramData().pipe(
      map((data) => data.meriseDiagrams.find((diagram) => diagram.id === id))
    );
  }
}
