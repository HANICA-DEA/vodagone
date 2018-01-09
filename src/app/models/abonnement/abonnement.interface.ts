import {Aanbieder} from './aanbieder.enum';
import {AbonnementStatus} from './abonnement.status.enum';
import {AbonnementUpgradabillity} from './abonnement.upgrade.enum';

export interface Abonnement {
  id: number;
  aanbieder: Aanbieder;
  dienst: string;
  prijs: string;
  startDatum: string;
  verdubbeling: AbonnementUpgradabillity;
  deelbaar: boolean;
  status: AbonnementStatus;
}
