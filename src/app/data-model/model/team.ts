import { Player } from "./player";

export class Team {
    public name: string;
    public school: string;
    public topLaner: Player;
    public jungle: Player;
    public midLaner: Player;
    public botLaner: Player;
    public support: Player;
    public remplacant1: Player;
    public remplacant2: Player;

    constructor(
        name: string,
        school: string,
        topLaner: Player,
        jungle: Player,
        midLaner: Player,
        botLaner: Player,
        support: Player,
        remplacant1?: Player,
        remplacant2?: Player
    ) {
        this.name = name;
        this.school = school;
        this.topLaner = topLaner;
        this.jungle = jungle;
        this.midLaner = midLaner;
        this.botLaner = botLaner;
        this.support = support;
        this.validateTeam();
        this.remplacant1 = remplacant1;
        this.remplacant2 = remplacant2;
    }

    validateTeam() {
        this.topLaner.validatePlayer();
        this.jungle.validatePlayer();
        this.midLaner.validatePlayer();
        this.botLaner.validatePlayer();
        this.support.validatePlayer();
    }

    getScore() {
        // TODO return the score of this team
        // Get all score
        // Filter match wheer this team play
        // for each match score 3 1 or 0 points
    }
}

export enum School {
    INSA = "INSA",
    ENSEEIHT = "ENSEEIHT",
    ISAESUPAERO = "ISAE SUPAERO",
    ENAC = "ENAC",
    UT1 = "UT1",
    UT2 = "UT2",
    UT3 = "UT3",
    CESI = "CESI",
    UPSSITECH = "UPSSITECH",
    EPITECH = "EPITECH",
    ICAM = "ICAM",
    IPI = "IPI",
    IL = "3IL",
    YNOV = "YNOV",
    ALBI = "MINES ALBI",
    ENSIACET = "ENSIACET",
    TBS = "TBS",
    TSM = "TSM",
    CHAMPOLLION = "INU Champollion Albi",
    ESN = "ESN 81"
}
