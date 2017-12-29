import {Component} from '@angular/core';
import {Abonnement} from '../../models/abonnement/abonnement.interface.model';
import {AbonnementImpl} from '../../models/abonnement/abonnement.model';
import {AbonnementType} from '../../models/abonnement/abonnement.type.enum';
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

  }

  public onShare(): void {

  }

  public loadAbonnement(abonnement: Abonnement): void {
    this.abonnementenService.getAbonnement(this.abonnement).then(data => this.setAbonnement(data));
  }

  private setAbonnement(abonnement: Abonnement): void {
    this.abonnement = abonnement;
  }

  private setEmptyAbonnement(): void {
    this.abonnement = new AbonnementImpl('', AbonnementType.VODAFONE);
  }

}
