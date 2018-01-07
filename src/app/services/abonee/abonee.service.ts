import {Injectable} from '@angular/core';
import {RestfulClientService} from '../restful-client.service';
import {HttpClient} from '@angular/common/http';
import {LoggingService} from '../logging/logging.service';

@Injectable()
export class AbonneeService extends RestfulClientService {

  /**
   * Create a new AbonneeService
   *
   * @param {HttpClient} httpClient
   * @param {LoggingService} loggingService
   */
  constructor(private httpClient: HttpClient,
              loggingService: LoggingService) {

    super(loggingService);
  }

}
