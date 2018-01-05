import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Abonnementen} from '../../models/abonnementen/abonnementen.interface.model';
import {AbonnementenService} from '../../services/abonnementen/abonnementen.service';
import {Abonnement} from '../../models/abonnement/abonnement.interface';
import {AbonnementenImpl} from '../../models/abonnementen/abonnementen.model';
import {Aanbieder} from '../../models/abonnement/aanbieder.enum';

@Component({
  selector: 'app-abonnementen',
  templateUrl: './abonnementen.component.html',
  styleUrls: ['./abonnementen.component.scss']
})
export class AbonnementenComponent implements OnInit {

  public abonnementen: Abonnementen;
  public selectedAbonnementId: number;
  public aanbieder = Aanbieder;

  @Output() selectedAbonnementChange = new EventEmitter<Abonnement>();

  constructor(private abonnementenService: AbonnementenService) {
    this.setEmptyAbonnementen();
  }

  ngOnInit() {
    this.updateAbonnementen();
  }

  private updateAbonnementen(): void {
    this.abonnementenService.getAbonnementen().then(abonnementen => this.setAbonnementen(abonnementen))
      .catch(any => this.setEmptyAbonnementen());
  }

  /**
   * Select a abonnement from the list.
   *
   * @param {Abonnement} abonnement
   */
  public onAbonnementSelected(abonnement: Abonnement): void {
    this.selectedAbonnementChange.emit(abonnement);
    if (abonnement) {
      this.selectedAbonnementId = abonnement.id;
    } else {
      this.selectedAbonnementId = undefined;
    }
  }

  private setAbonnementen(abonn: Abonnementen): void {
    this.abonnementen = abonn;

    if (this.abonnementen.abonnementen.length > 0) {

      let abonnementToSelect = this.abonnementen.abonnementen[0];

      if (this.selectedAbonnementId) {
        for (const abonnement of this.abonnementen.abonnementen) {
          if (abonnement.id === this.selectedAbonnementId) {
            abonnementToSelect = abonnement;
            break;
          }
        }
      }

      this.onAbonnementSelected(abonnementToSelect);
    } else {
      this.onAbonnementSelected(undefined);
    }
  }

  private setEmptyAbonnementen(): void {
    this.abonnementen = new AbonnementenImpl();
  }
}
