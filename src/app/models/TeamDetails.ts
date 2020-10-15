import { TeamAttributes } from './TeamAttributes';

export class TeamDetails {
    id: string;
    type: string;
    attributes: TeamAttributes;

    constructor(id:string, type: string){
        this.id = id;
        this.type = type;        
    }
}