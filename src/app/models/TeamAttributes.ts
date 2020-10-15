import { MemberCard } from './MemberCard';

export class TeamAttributes {
    title: string;
    memberCards: Array<MemberCard>;

    constructor(title:string){
        this.title = title;
        this.memberCards = new Array<MemberCard>();
    }
}