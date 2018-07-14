import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  authername:string;
  position: number;
  noogpages: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'C',authername:'Dennis Ritchie', noogpages: 200, price: 210},
  {position: 2, name: 'C++',authername:'Bjarane', noogpages: 250, price: 350},
  {position: 3, name: 'JAVA',authername:'James', noogpages: 300, price: 500},
  {position: 4, name: 'Angular',authername:'Any' ,noogpages: 150, price: 425},
  {position: 5, name: 'Paython',authername:'Unknown', noogpages: 100, price: 177},
  
];






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name','authername', 'noogpages', 'price'];
  dataSource = ELEMENT_DATA;
}
