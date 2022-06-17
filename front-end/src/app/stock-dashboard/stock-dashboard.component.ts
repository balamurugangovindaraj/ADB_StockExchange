import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonHttpService } from '../../service/common-http.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
interface Company {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {
  indexList: any;
  selectedCompany: string = 'META';
  companys: Company[] = [
    { value: 'IBM', viewValue: 'IBM' },
    { value: 'META', viewValue: 'META' },
    { value: 'MSFT', viewValue: 'MSFT' },
    { value: 'TCS', viewValue: 'TCS' },
    { value: 'TCS', viewValue: 'TCS' },
  ];
  selectChangeHandler(event: any) {
    this.selectedCompany = event.target.value;
    console.log(this.selectedCompany);
    this.getStockData();
  }
  constructor(private router: Router, private httpService: CommonHttpService) {
    this.getStockData()
  }
// Get company overview API
// Sort by Company 
  getStockData() {
    this.httpService.getSecure(`${environment.getStockData}/${this.selectedCompany}`).subscribe((data: any) => {
      if (!data.error) {
        console.log(data);
        this.indexList = data;
      }
    }, error => {
      console.log("API error", error);
    });
  }

 
  ngOnInit(): void {
  }

}
