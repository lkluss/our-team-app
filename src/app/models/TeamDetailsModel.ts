import { TeamAttributesModel } from './TeamAttributesModel';


export class TeamDetailsModel {
    id: string;
    type: string;
    attributes: TeamAttributesModel;

    constructor(id:string, type: string){
        this.id = id;
        this.type = type;        
    }
}