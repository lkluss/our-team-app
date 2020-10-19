import { MemberCardModel } from './MemberCardModel';

export class TeamAttributesModel {
    title: string;
    memberCards: Array<MemberCardModel>;

    constructor(title:string){
        this.title = title;
        this.memberCards = new Array<MemberCardModel>();
    }
}