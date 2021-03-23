import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Thiago";
  test: any;

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.financeService.getStockInformation('ITSA4.SA').subscribe(r => this.test = r);
  }

}
