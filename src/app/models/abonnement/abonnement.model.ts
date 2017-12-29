import {Abonnement} from './abonnement.interface.model';
import {AbonnementType} from './abonnement.type.enum';

export class AbonnementImpl implements Abonnement {
  id: number;
  name: string;
  type: AbonnementType;

  constructor(name: string, type: string) {
    this.id = -1;
    this.name = name;
    this.type = undefined;
  }
}
