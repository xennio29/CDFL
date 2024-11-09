import { Player } from "./player";

export class Tournament {
     public name: string;
     public organiser: string;
     public date: string;
     public playersCount: number;
     public qualifiedPlayers: Player[];

     constructor(name: string, organiser: string, date: string, playersCount: number, qualifiedPlayers: Player[]) {
        this.name = name;
        this.organiser = organiser;
        this.date = date;
        this.playersCount = playersCount;
        this.qualifiedPlayers = qualifiedPlayers;
    }
}