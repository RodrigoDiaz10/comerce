import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIcon
    
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  httpClient = inject(HttpClient)

  data: any[] = []

  fetchData() {
    this.httpClient
      .get("https://rickandmortyapi.com/api/character/1,183")
      .subscribe((data: any) =>{
        console.log(data);
        this.data = data
      })
  }

  alreayExist(){
    return false
  }

  /*constructor(private apiService:ApiService){
    this.apiService.getData().subscribe(data=>
      this.data=data
    )
    console.log(this.data)
  }*/
  ngOnInit(): void {
    this.fetchData();
  }


}
