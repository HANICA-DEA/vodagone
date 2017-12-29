import {AbonnementType} from './abonnement.type.enum';

export interface Abonnement {
  id: number;
  name: string;
  type: AbonnementType;
}
