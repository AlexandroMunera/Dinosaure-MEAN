import { Component, OnInit } from '@angular/core';
import { Dino } from '../dino';
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  dinos: Dino[] = [];

  constructor(private dinoService: DinoService) { }

  ngOnInit() {
    this.getDinos();
  }

  getDinos(): void {
    this.dinoService.getDinos()
      .subscribe(dinos => this.dinos = dinos.slice(1, 5));
  }
}