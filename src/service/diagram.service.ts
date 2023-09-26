import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DiagramData } from 'src/model/diagramData';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  private jsonUrl = 'src/model/diagrams.json';

  constructor(private http: HttpClient) { }

  getDiagramData(): Observable<DiagramData> {
    return this.http.get<DiagramData>(this.jsonUrl);
  }
}
