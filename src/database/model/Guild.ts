import {ObjectId} from 'mongodb';
import * as config from '../../../resources/config.json'

export default class Guild {
    _id: ObjectId;
    readonly guild: string;

    generalRole : string;
    bigmanRole: string;
    badmanRole: string;

    quoteSubmission: string;
    roastSubmission: string;
    insultSubmission: string;

    quoteChannel: string;
    musicChannel: string;

    prefixes: string[];

    constructor(guild: string) {
        this.guild = guild;
    }

    static modelBuilder(object: any): Guild {
        let guild = new Guild(object.guild);

        if (object.quoteSubmission !== undefined) guild.quoteSubmission = object.quoteSubmission;
        if (object.quoteChannel !== undefined) guild.quoteChannel = object.quoteChannel;
        if (object.roastSubmission !== undefined) guild.roastSubmission = object.roastSubmission;
        if (object.insultSubmission !== undefined) guild.insultSubmission = object.insultSubmission;
        if (object.bigmanRole !== undefined) guild.bigmanRole = object.bigmanRole;
        if (object.generalRole !== undefined) guild.generalRole = object.generalRole;
        if (object.badmanRole !== undefined) guild.badmanRole = object.badmanRole;
        if (object.musicChannel !== undefined) guild.musicChannel = object.musicChannel;

        if (object.prefixes !== undefined && object.prefixes !== null) guild.prefixes = object.prefixes;
        else guild.prefixes = config.bot.prefixes;

        if (object._id !== undefined) guild._id = object._id;
        else guild._id = new ObjectId();

        return guild;
    }

    toString(): object {
        return {
            _id: this._id,
            guild: this.guild,
            bigmanRole: this.bigmanRole,
            generalRole: this.generalRole,
            badmanRole: this.badmanRole,
            quoteSubmission: this.quoteSubmission,
            quoteChannel: this.quoteChannel,
            roastSubmission: this.roastSubmission,
            insultSubmission: this.insultSubmission,
            musicChannel: this.musicChannel,
            prefixes: this.prefixes
        }
    }
}