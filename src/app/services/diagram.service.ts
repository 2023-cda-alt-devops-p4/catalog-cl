import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DiagramData } from '../models/diagramData';
import { Card } from '../models/card';

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

  /* BY ID */
  getDiagramById(id: number): Observable<Card | undefined> {
    return this.getDiagramData().pipe(
      map((data) => {
        const meriseDiagram = data.meriseDiagrams.find((diagram) => diagram.id === id);
        if (meriseDiagram) {
          return meriseDiagram;
        }
        return data.umlDiagrams.find((diagram) => diagram.id === id);
      })
    );
  }
}
