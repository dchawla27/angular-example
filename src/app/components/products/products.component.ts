import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allData = [];

  constructor(public procuctService: ProductsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // try {
    //   const data = await this.procuctService.getEmployee().toPromise();
    //   if (data) {
    //     console.log('temp--', data);
    //     this.allData = this.prepareData(data);
    //   }
    // } catch (e) {
    //   console.log('e--', e);
    // }

    this.procuctService.getEmployee().subscribe((data) => {
      this.allData = this.prepareData(data);
    }, (error) => {
      console.log('error------', error);
    });
  }

  prepareData(data) {
    const significuntData = JSON.stringify(data);
    const temp = JSON.parse(significuntData);
    return Object.assign([], temp.result);
  }

}
