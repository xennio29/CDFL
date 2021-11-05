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
    private score: number;

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
        this.score = 0;
    }

    validateTeam() {
        this.topLaner.validatePlayer();
        this.jungle.validatePlayer();
        this.midLaner.validatePlayer();
        this.botLaner.validatePlayer();
        this.support.validatePlayer();
    }

    getScore(): number {
        return this.score;
    }

    addScore(scoreToAdd: number): void {
        this.score = this.score + scoreToAdd;
        console.log('this.score is now ' + this.score);
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
    ESN = "ESN 81",
    SOPRA = "SOPRA STERIA"
}
