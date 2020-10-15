export class MemberCard {
    imageUrl: ImageUrl;
    block: MemberBlockDetails;
}

class ImageUrl {
    w200: string;
    w400: string;
    w1080: string;
    w1920: string;
    w2560: string;

}

class MemberBlockDetails {
    title: string;
    description: string;
    link: string;
    text: string;
}

