import {Abonnement} from './abonnement.interface';
import {Aanbieder} from './aanbieder.enum';
import {AbonnementStatus} from './abonnement.status.enum';

export class AbonnementImpl implements Abonnement {
  id: number;
  dienst: string;
  aanbieder: Aanbieder;
  startDatum: string;
  status: AbonnementStatus;
  verdubbelbaar: boolean;
  deelbaar: boolean;
  verdubbeld: boolean;

  constructor(aanbieder: Aanbieder,  dienst: string) {
    this.id = -1;
    this.dienst = dienst;
    this.startDatum = undefined;
    this.aanbieder = aanbieder;
    this.status = undefined;
    this.verdubbelbaar = false;
    this.verdubbeld = false;
    this.deelbaar = false;
  }
}
