import { MemberCardModel } from './../models/MemberCardModel';
import { TeamDetailsModel } from './../models/TeamDetailsModel';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { TeamAttributesModel } from '../models/TeamAttributesModel';

@Injectable({
  providedIn: 'root'
})
export class TeamProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }  

  /**
   * 
   */
  getAllTeams(): Observable<any>{
    return this.http.get<string>(this.apiUrl).pipe(
      map((data: any) => {
        return data.data;
      }), catchError(error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  /**
   * Get details of team with given id
   * @param id team id
   */
  getTeamDetails(id:number): Observable<TeamDetailsModel> {
    return this.http.get<string>(this.apiUrl).pipe(
      map((data: any) => {
        let obj = data.data.find(e => e.id == id);
        return this.mapTeamDetails(obj);
      }), catchError(error => {
        return throwError( 'Something went wrong!' );
      })
    )
  }

  /**
   * Map business model to presentation model
   * @param teamDetails 
   */
  private mapTeamDetails(teamDetails: any): TeamDetailsModel {
    const model = new TeamDetailsModel(teamDetails.id, teamDetails.type);
    model.attributes = new TeamAttributesModel(teamDetails.attributes.title);

    for (const [key, value] of Object.entries(teamDetails.attributes.memberCards)) {
      let attribute = new MemberCardModel();
      Object.assign(attribute, value);
      model.attributes.memberCards.push(attribute)
    }
    return model;
  }
}


