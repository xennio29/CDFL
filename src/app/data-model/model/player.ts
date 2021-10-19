export class Player {

    public firstName: string;
    public lastName: string;
    public pseudo: string;
    public id: number;
    public role: RoleLogo;

    constructor(id: number, firstName: string, lastName: string, pseudo: string, role: RoleLogo ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.pseudo = pseudo;
        this.validatePlayer();
        this.role = role;
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

export enum RoleLogo {
    topLanerLogo = 'assets/img/role icon/Top_icon.png',
    midLanerLogo = 'assets/img/role icon/Middle_icon.png',
    jungleLogo = 'assets/img/role icon/Jungle_icon.png',
    botLogo = 'assets/img/role icon/Bottom_icon.png',
    supportLogo = 'assets/img/role icon/Support_icon.png',
    replacementLogo = 'assets/img/role icon/RP_icon.png'
}
