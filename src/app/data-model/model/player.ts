export class Player {
    public firstName: string;
    public lastName: string;
    public pseudo: string;
    public id: number;

    constructor(id: number, firstName: string, lastName: string, pseudo: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pseudo = pseudo;
        this.validatePlayer();
    }
    validatePlayer() {

        const issue: string[] = []
        if (this.id === null || this.id === undefined) { issue.push['id']; }
        if (this.firstName === null || this.firstName === undefined) { issue.push['firstName']; }
        if (this.lastName === null || this.lastName === undefined) { issue.push['lastName']; }
        if (this.pseudo === null || this.pseudo === undefined) { issue.push['pseudo']; }

        if (issue.length !== 0) {
            console.error('[DATA ERROR FOR PLAYER]: on parameter(s) : ', issue.concat(', '));
        }
    }
}
