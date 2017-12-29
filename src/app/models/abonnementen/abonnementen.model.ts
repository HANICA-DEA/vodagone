import {Abonnement} from '../abonnement/abonnement.interface.model';
import {Abonnementen} from './abonnementen.interface.model';

export class AbonnementenImpl implements Abonnementen {
  abonnementen: Abonnement[];
  totalPrice: number;

  constructor() {
    this.abonnementen = [];
    this.totalPrice = 0;
  }
}
