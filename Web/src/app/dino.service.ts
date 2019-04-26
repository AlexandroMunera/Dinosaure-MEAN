import { Injectable } from '@angular/core';
import { Dino } from "./dino";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DinoService {

  constructor(private http: HttpClient) { }

  private URL_BASE = 'http://localhost:3000/api';

  

  getDinos (): Observable<Dino[]> {
    return this.http.get<Dino[]>(this.URL_BASE + "/dinos");
  }

  getDino(name: string): Observable<Dino> {
    return this.http.get<Dino>(this.URL_BASE + "/dino/" + name);
    // return of(DINOS.find(dino => dino.name === name));
  }  

  updateDino(dino: Dino): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log("Voy a editar el dino -> ",dino._id);

    return this.http.put(this.URL_BASE + "/dino/"+ dino._id,dino,httpOptions);

  }

  addDino(dino: Dino): Observable<Dino>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log("Voy a crear un dino -> ",dino);

    return this.http.post<Dino>(this.URL_BASE + "/dino/"+dino.name,dino,httpOptions);

  }

  deleteHero(dino: Dino): Observable<Dino>{

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    console.log("Voy a eliminar un dino -> ",dino);

    return this.http.delete<Dino>(this.URL_BASE + "/dino/"+ dino._id,httpOptions);

  }
  
}
