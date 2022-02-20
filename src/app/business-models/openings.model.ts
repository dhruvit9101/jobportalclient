export class openings {
    public title: string;
    public refNumber: string;
    public shortDesscription: string;
    public longDesscription: string;
    public location: string;

    constructor(title?, refNumber?, shortDesscription?, longDesscription?, location?) {
        this.title = title;
        this.refNumber = refNumber;
        this.shortDesscription = shortDesscription;
        this.longDesscription = longDesscription;
        this.location = location;
    }
}