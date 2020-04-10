export default class Roast{
    _id : string
    readonly roast : string;
    readonly submitted : string;
    readonly timestamp: Date;
    accepted : boolean;
    pending : boolean;

    constructor (roast: string, submitted: string, timestamp: Date, accepted: boolean, pending : boolean) {
        this.roast = roast;
        this.submitted = submitted;
        this.timestamp = timestamp;
        this.accepted = accepted;
        this.pending = pending;
    }

    static modelBuilder(object : any) : Roast{
        let roast = new Roast(object.roast, object.submitted, object.timestamp, object.accepted, object.pending);
        if(object._id !== undefined) roast._id = object._id;
        return roast;
    }
}