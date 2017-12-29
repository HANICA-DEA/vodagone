import {Injectable} from '@angular/core';
import {LoggingService} from '../logging/logging.service';
import {VodagoneConstants} from '../../vodagone.constants';

import 'rxjs/add/operator/toPromise';
import {RestfulClientService} from '../restful-client.service';
import {HttpClient} from '@angular/common/http';
import {Abonnementen} from '../../models/abonnementen/abonnementen.interface.model';
import {Abonnement} from '../../models/abonnement/abonnement.interface.model';

@Injectable()
export class AbonnementenService extends RestfulClientService {

  /**
   * Create a new AbonnementenService
   *
   * @param {HttpClient} httpClient
   * @param {LoggingService} loggingService
   */
  constructor(private httpClient: HttpClient,
              loggingService: LoggingService) {

    super(loggingService);
  }

  /**
   * Return a complete list of Abonnementen.
   *
   * @return {Promise<Abonnementen>} The complete list of abonnementen.
   */
  public async getAbonnementen(): Promise<Abonnementen> {
    const endpointUrl = this.getAbonnementEndpoint(undefined);
    const params = this.createtokenParam();

    try {
      const data: Abonnementen = await this.httpClient.get<Abonnementen>(endpointUrl, {params: params}).toPromise();
      return data;
    } catch (err) {
      this.handleErrors(err);
      return Promise.reject(err);
    }
  }

  /**
   * Return a specific Abonnement.
   *
   * @param {Abonnement} abonnement
   * @return {Promise<Abonnement>} A specific Abonnement
   */
  public async getAbonnement(abonnement: Abonnement): Promise<Abonnement> {
    const endpointUrl = this.getAbonnementEndpoint(abonnement);
    const params = this.createtokenParam();

    try {
      const data: Abonnement = await this.httpClient.get<Abonnement>(endpointUrl, {params: params}).toPromise();
      return data;
    } catch (err) {
      this.handleErrors(err);
      return Promise.reject(err);
    }
  }

  private getAbonnementEndpoint(abonnement: Abonnement): string {
    const baseEndpointUrl = this.createEndpointUrl(VodagoneConstants.API_ABONNEMENTEN);

    if (abonnement) {
      return (baseEndpointUrl.concat('/')).concat(abonnement.id.toString());
    } else {
      return baseEndpointUrl;
    }
  }
}
