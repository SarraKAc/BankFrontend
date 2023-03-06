import { Compte } from '../models/compte.model';
import { Utilisateur } from '../models/utilisateur.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const URL=environment.apiUrl;
const SECRET_KEY=environment.api_key;


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2Mzg3NTQ5MTRlMTZiY2U0NjBiYTM2YTgiLCJpYXQiOjE2Njk4MTgzNDMsImV4cCI6MTY2OTkwNDc0M30.zYd8VqyrH_eZ69Th3wYGBJkXZHB5yPq2UQVRhbqx0Ec'}`
});

const requestOptions = { headers: headers };


 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
     private http:HttpClient,
    private tokenStorage :TokenStorageService,) { }

    


//Get All Users
  public getAllUsers():Observable <Utilisateur[]  > {
    return this.http.get<Utilisateur[]>(URL+'/utilisateur',requestOptions)
  }


  //Delete User  
deleteUserfromRoot(id:string | undefined ):Observable<Utilisateur>{
  return this.http.delete<Utilisateur>(URL+'/utilisateur/'+id,requestOptions);
  }

//Get All Service Offert
  public getAllAccounts():Observable <Compte[]  > {
    return this.http.get<Compte[]>(URL+'/comptecrudservice',requestOptions)
  }

//Ajouter Service Offert
    addServiceOffert(service:Compte):Observable<Compte>{
      return this.http.post<Compte>(URL+'/serviceOff/addServiceOff', service,requestOptions);
      }
      public getServiceOfferByIdt(id:string | any ):Observable<Compte> {
        return this.http.get<Compte>(URL+'/serviceOff/'+id,requestOptions);
      }
//supprimer Service
    deleteServiceOffert(id:string):Observable<Compte>{
      return this.http.delete<Compte>(URL+'/serviceOff/'+id,requestOptions);
      }
     
 //Modier Profile
 EditProfile(user:Utilisateur):Observable<Utilisateur>{
  return this.http.put<Utilisateur>(URL+'/utilisateur/'+this.tokenStorage.getUser().id, user,requestOptions);
  }    

  //Get User
public getUser(id:String):Observable <Utilisateur> {
  return this.http.get<Utilisateur>(URL+'/utilisateur/'+id,requestOptions)
}
  
  //Get user byid 
  public getUserId(id:string):Observable < Utilisateur > {
    return this.http.get<Utilisateur>(URL+'/utilisateur/'+id,requestOptions)
  }

//Authentification
login(credentials: Credential): Observable<any>{
  return this.http.post(URL + "/utilisateur/login", credentials)
}
signUp(user: Utilisateur): Observable<any>{
  return this.http.post(URL + "/utilisateur/register", user)
}

  
}
