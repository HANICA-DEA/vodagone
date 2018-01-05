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

  public disableUpgradeButton = false;
  public disableShareButton = false;
  public disableTerminateButton = false;

  constructor(private abonnementenService: AbonnementenService) {
    this.setEmptyAbonnement();
  }

  /**
   * Upgade this Abonnement.
   */
  public onUpgrade(): void {

  }

  /**
   * Terminate this Abonnement.
   */
  public onTerminate(): void {
    this.abonnementenService.terminateAbonnement(this.abonnement.id).then(data => this.setAbonnement(data));
  }

  public onShare(): void {

  }

  public onLoadAbonnement(id: number): void {
    this.abonnementenService.getAbonnement(id).then(data => this.setAbonnement(data));
  }

  private setAbonnement(abonnement: Abonnement): void {
    this.abonnement = abonnement;

    this.updateButtonState(abonnement);
  }

  private setEmptyAbonnement(): void {
    this.abonnement = new AbonnementImpl(Aanbieder.VODAFONE, '');
  }

  private updateButtonState(abonnement: Abonnement): void {
    this.disableTerminateButton = abonnement.status === AbonnementStatus.OPGEZEGD;
    this.disableUpgradeButton = !abonnement.verdubbelbaar || abonnement.verdubbeld;
    this.disableShareButton = !abonnement.deelbaar;
  }

}
