import {Component, OnInit} from '@angular/core';
import {Abonnement} from '../../models/abonnement/abonnement.interface.model';
import {AbonnementImpl} from '../../models/abonnement/abonnement.model';
import {AbonnementType} from '../../models/abonnement/abonnement.type.enum';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {

  public abonnement: Abonnement;

  constructor() {
    this.setEmptyAbonnement();
  }

  ngOnInit() {
  }

  private setEmptyAbonnement(): void {
    this.abonnement = new AbonnementImpl('', AbonnementType.VODAFONE);
  }

}
