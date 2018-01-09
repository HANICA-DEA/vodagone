import {Abonnement} from './abonnement.interface';
import {Aanbieder} from './aanbieder.enum';
import {AbonnementStatus} from './abonnement.status.enum';
import {AbonnementUpgradabillity} from './abonnement.upgrade.enum';

export class AbonnementImpl implements Abonnement {
  id: number;
  aanbieder: Aanbieder;
  dienst: string;
  prijs: string;
  startDatum: string;
  status: AbonnementStatus;
  verdubbeling: AbonnementUpgradabillity;
  deelbaar: boolean;

  constructor(aanbieder: Aanbieder, dienst: string) {
    this.id = -1;
    this.aanbieder = aanbieder;
    this.dienst = dienst;
    this.prijs = '';
    this.startDatum = undefined;
    this.status = undefined;
    this.verdubbeling = AbonnementUpgradabillity.UNAVAILABLE;
    this.deelbaar = false;
  }
}
