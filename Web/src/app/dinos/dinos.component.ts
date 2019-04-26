import { Component, OnInit } from '@angular/core';
import { Dino } from "../dino";
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-dinos',
  templateUrl: './dinos.component.html',
  styleUrls: ['./dinos.component.css']
})
export class DinosComponent implements OnInit {
  
  dinos: Dino[];

  constructor(private dinoService: DinoService) { }  

  ngOnInit() {
    this.getDinos();
  }

  getDinos(): void {
    this.dinoService.getDinos()
        .subscribe(dinos => this.dinos = dinos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dinoService.addDino({ name } as Dino)
      .subscribe(dino => {
        this.dinos.push(dino);
      });
  }

  delete(dino: Dino): void {
    this.dinos = this.dinos.filter(h => h !== dino);
    this.dinoService.deleteHero(dino).subscribe();
  }

}
