import {Abonnement} from './abonnement.interface';
import {Aanbieder} from './aanbieder.enum';
import {AbonnementStatus} from './abonnement.status.enum';

export class AbonnementImpl implements Abonnement {
  id: number;
  aanbieder: Aanbieder;
  dienst: string;
  prijs: string;
  startDatum: string;
  status: AbonnementStatus;
  verdubbelbaar: boolean;
  deelbaar: boolean;
  verdubbeld: boolean;

  constructor(aanbieder: Aanbieder, dienst: string) {
    this.id = -1;
    this.aanbieder = aanbieder;
    this.dienst = dienst;
    this.prijs = '';
    this.startDatum = undefined;
    this.status = undefined;
    this.verdubbelbaar = false;
    this.verdubbeld = false;
    this.deelbaar = false;
  }
}
