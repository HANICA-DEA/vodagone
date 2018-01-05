import {Aanbieder} from './aanbieder.enum';
import {AbonnementStatus} from './abonnement.status.enum';

export interface Abonnement {
  id: number;
  aanbieder: Aanbieder;
  dienst: string;
  startDatum: string;
  verdubbelbaar: boolean;
  verdubbeld: boolean;
  deelbaar: boolean;
  status: AbonnementStatus;
}
