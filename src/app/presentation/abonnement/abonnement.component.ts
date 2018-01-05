import {Component} from '@angular/core';
import {Abonnement} from '../../models/abonnement/abonnement.interface';
import {AbonnementImpl} from '../../models/abonnement/abonnement.model';
import {Aanbieder} from '../../models/abonnement/aanbieder.enum';
import {AbonnementStatus} from '../../models/abonnement/abonnement.status.enum';
import {AbonnementenService} from '../../services/abonnementen/abonnementen.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent {

  public abonnement: Abonnement;

  public abonnementStatus = AbonnementStatus;

  constructor(private abonnementenService: AbonnementenService) {
    this.setEmptyAbonnement();
  }

  public onUpgrade(): void {

  }

  public onTerminate(): void {
    this.abonnementenService.terminateAbonnement(this.abonnement).then(data => this.setAbonnement(data));
  }


  public onShare(): void {

  }

  public loadAbonnement(abonnement: Abonnement): void {
    this.abonnementenService.getAbonnement(abonnement).then(data => this.setAbonnement(data));
  }

  private setAbonnement(abonnement: Abonnement): void {
    this.abonnement = abonnement;
  }

  private setEmptyAbonnement(): void {
    this.abonnement = new AbonnementImpl(Aanbieder.VODAFONE, '');
  }

}
