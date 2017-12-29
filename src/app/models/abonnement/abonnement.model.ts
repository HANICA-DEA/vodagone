import {Abonnement} from './abonnement.interface.model';
import {AbonnementType} from './abonnement.type.enum';
import {AbonnementStatus} from './abonnement.status.enum';
import {AbonnementSoort} from './abonnement.soort.enum';

export class AbonnementImpl implements Abonnement {
  id: number;
  name: string;
  type: AbonnementType;
  startDatum: string;
  status: AbonnementStatus;
  soort: AbonnementSoort;
  verdubbeld: boolean;

  constructor(name: string, type: AbonnementType) {
    this.id = -1;
    this.name = name;
    this.startDatum = undefined;
    this.type = type;
    this.status = undefined;
    this.soort = undefined;
    this.verdubbeld = false;
  }
}
