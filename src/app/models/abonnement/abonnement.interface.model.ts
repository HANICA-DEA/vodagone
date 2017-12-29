import {AbonnementType} from './abonnement.type.enum';
import {AbonnementStatus} from './abonnement.status.enum';
import {AbonnementSoort} from './abonnement.soort.enum';

export interface Abonnement {
  id: number;
  name: string;
  startDatum: string;
  type: AbonnementType;
  status: AbonnementStatus;
  soort: AbonnementSoort;
  verdubbeld: boolean;
}
