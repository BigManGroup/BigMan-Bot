//A general object that will hold the formatted message
export default class FormattedMessage {
    readonly command: string;
    readonly parameters: string[];

    constructor(command: string, parameters : string[]) {
        this.command = command;
        this.parameters = parameters;
    }
}
//A general object that will hold the formatted message