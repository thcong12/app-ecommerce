import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private api:string = environment.api + 'product';
  constructor(private http:HttpClient) { }
  public getproduct(){
    const url = this.api
    return this.http.get(url)
  }
  public getSingleProduct(id:string){
    const url = `${this.api}/${id}`
    return this.http.get(url)
  }
}
