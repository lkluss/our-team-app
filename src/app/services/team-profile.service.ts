import { MemberCard } from './../models/MemberCard';
import { TeamDetails } from './../models/TeamDetails';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { TeamAttributes } from '../models/TeamAttributes';

@Injectable({
  providedIn: 'root'
})
export class TeamProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }  

  getAllTeams(): Observable<any>{
    return this.http.get<string>(this.apiUrl).pipe(
      map((data: any) => {
        return data.data;
      }), catchError(error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  getTeamDetails(id:number): Observable<TeamDetails> {
    return this.http.get<string>(this.apiUrl).pipe(
      map((data: any) => {
        let obj = data.data.find(e => e.id == id);
        return this.mapTeamDetails(obj);
      }), catchError(error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  private mapTeamDetails(teamDetails: any): TeamDetails {
    const model = new TeamDetails(teamDetails.id, teamDetails.type);
    model.attributes = new TeamAttributes(teamDetails.attributes.title);

    for (const [key, value] of Object.entries(teamDetails.attributes.memberCards)) {
      let attribute = new MemberCard();
      Object.assign(attribute, value);
      model.attributes.memberCards.push(attribute)
    }
    return model;
  }
}


