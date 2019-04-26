import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dino } from "../dino";
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-dino-detail',
  templateUrl: './dino-detail.component.html',
  styleUrls: ['./dino-detail.component.css']
})
export class DinoDetailComponent implements OnInit {
  
  @Input() dino: Dino;

  constructor(private dinoService: DinoService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit(): void {
      this.getDino();
    }
    
    getDino(): void {
      const name = this.route.snapshot.paramMap.get('name');

      this.dinoService.getDino(name)
        .subscribe(dino => this.dino = dino[0]);

    }

    goBack(): void {
      this.location.back();
    }

    save(): void{
      this.dinoService.updateDino(this.dino)
      .subscribe(() => this.goBack());
    }

}
