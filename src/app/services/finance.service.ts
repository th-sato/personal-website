import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  REGION: string = 'BR';
  LANGUAGE: string = 'pt-BR';
  TICKET: string = '{ticket}'
  INTERVAL: string = '2m';
  RANGE: string = '1d';
  URL: string = 'https://query1.finance.yahoo.com/v8/finance/chart/{ticket}'
    + `?region=${this.REGION}&lang=${this.LANGUAGE}&includePrePost=false`
    + `&interval=${this.INTERVAL}&range=${this.RANGE}&.tsrc=finance`;

  constructor(private httpClient: HttpClient) { }

  public getStockInformation(ticket: string) {
    const url = this.URL.replace(this.TICKET, ticket);
    return this.httpClient.get(url);
  }
}
