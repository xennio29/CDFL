import { RulesComponent } from "src/app/rules/rules.component";
import { Article } from "../model/article";
import { MatchsPoule } from "../model/matchsPoule";
import { Player, RoleLogo } from "../model/player";
import { Poule } from "../model/poule";
import { Team } from "../model/team";
import { Rules } from "../model/rules";
import { DataBase } from "./database";

export class MockDataBase extends DataBase {

    private TEAM_BY_POULE = 4;

    constructor(rules: string) {
        super(null);
        this.addBaseData();
        this.addTeamData();
        this.addRules(rules);
        this.addArticles();
    }

    private addBaseData(): void {
        this.setTournamentId('TLC');
        this.setTournamentName('Toulouse League Cup');
    }

    private addRules(rules: string): void {
        this.setRules(new Rules(rules).getContent());
    }

    private addTeamData(): void {
        var allTeams: Team[] = [];
        allTeams.push(new Team('Digitalesses', 'EPITECH',
            new Player(1, 'TITOUAN', 'BEGUERE', 'RaimeiManta', RoleLogo.topLanerLogo),
            new Player(2, 'Maxime', 'Cousinie', 'macgamer31', RoleLogo.jungleLogo),
            new Player(3, 'Léo', 'Maliczak', 'Stuuck lron', RoleLogo.midLanerLogo),
            new Player(4, 'Pierre', 'Ilari', 'Pierre0807', RoleLogo.botLogo),
            new Player(5, 'Jugurta', 'Zaïdi', 'xyxuu', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Chomagerie ', 'UT1',
            new Player(1, 'Hamid', 'ATROUNE', 'DRAKEN', RoleLogo.topLanerLogo),
            new Player(2, 'Lakhdar', 'NOUAR', 'Abdu Roziq', RoleLogo.jungleLogo),
            new Player(3, 'Hakim', 'NOUAR', 'STYL3SPROD', RoleLogo.jungleLogo),
            new Player(4, 'Ilyes', 'HARZALI', 'MolotovKnüt', RoleLogo.botLogo),
            new Player(5, 'Zakaria', 'LOUDAGH', 'Zakichan31', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Petit 7', 'ENSEEIHT',
            new Player(1, 'Oscar', 'LE GRANCHÉ', 'Invisi Balll', RoleLogo.topLanerLogo),
            new Player(2, 'Jules', 'ARRA', 'Jeune Roulio', RoleLogo.jungleLogo),
            new Player(3, 'Nathan', 'ROY', 'Hervé le Routier', RoleLogo.jungleLogo),
            new Player(4, 'Mathieu', 'SALAUZE', 'Fan 2 Shiva', RoleLogo.botLogo),
            new Player(5, 'Tom', 'Portafaix', 'Raquaza12345', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Confrérie du Malaise', 'ENSEEIHT',
            new Player(1, 'Théo', 'KOTSONIS', 'δαrksαsυkε', RoleLogo.topLanerLogo),
            new Player(2, 'Grégoire', 'HONVAULT', 'ρrinceChαrming', RoleLogo.jungleLogo),
            new Player(3, 'Quentin', 'FRATY', 'OAB', RoleLogo.jungleLogo),
            new Player(4, 'Tom', 'MASSAI', 'DreadFog', RoleLogo.botLogo),
            new Player(5, 'Édouard', 'LEFIZELIER', 'Sel de guérende', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('KPR', '3IL',
            new Player(1, 'Gabriel', 'ROUET', 'Kobal', RoleLogo.topLanerLogo),
            new Player(2, 'Filip', 'STOGREN', 'Fish Lip', RoleLogo.jungleLogo),
            new Player(3, 'Lucas', 'SALINAS', 'Le Soldat Royal', RoleLogo.midLanerLogo),
            new Player(4, 'Dylan', 'NOVIER', 'StuckSilverr', RoleLogo.botLogo),
            new Player(5, 'Adrien', 'VALVERDE', 'Etareneva 1', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('C\'est une bonne situation scribe ?', 'UT2',
            new Player(1, 'Rémy', 'MESTRE', 'Toastos', RoleLogo.topLanerLogo),
            new Player(2, 'Nicolas', 'DOUMENC', 'Ruzzan', RoleLogo.jungleLogo),
            new Player(3, 'Lucas', 'ARNAL', 'Keyniix', RoleLogo.midLanerLogo),
            new Player(4, 'Tom', 'FERRASSE', 'Thumflumch', RoleLogo.botLogo),
            new Player(5, 'Sylvain', 'MESTRE', 'Shult', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('E-Sport-Noobies', 'ESN81',
            new Player(1, 'Guillaume', 'Dax', 'PaulRicard4ever', RoleLogo.topLanerLogo),
            new Player(2, 'Quentin', 'Costes', 'UnZiziFurtif', RoleLogo.jungleLogo),
            new Player(3, 'Pierre', 'Tubeuf', 'xad11', RoleLogo.midLanerLogo),
            new Player(4, 'Ousman ', 'Hassani', 'Hyuk Kang', RoleLogo.botLogo),
            new Player(5, 'Claudian', 'Camus', 'Clau81', RoleLogo.supportLogo),
            new Player(6, 'Mathieu', 'Almon', 'mathieu012', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('La meilleure table', 'EPITECH',
            new Player(1, 'Alexandre', 'CORNILLE', 'eldiabloss974', RoleLogo.topLanerLogo),
            new Player(2, 'Théo', 'BELY', 'superguppy31', RoleLogo.jungleLogo),
            new Player(3, 'Kéziah', 'IMER', 'Jubıko', RoleLogo.midLanerLogo),
            new Player(4, 'Thomas', 'PAPAIX', 'Deviltix66', RoleLogo.botLogo),
            new Player(5, 'Simon', 'VERMEULEN', 'Capichef Azerlus', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Riftricks7', 'ENSEEIHT',
            new Player(1, 'Romain', 'Barda-Chatain', 'WarGun31', RoleLogo.topLanerLogo),
            new Player(2, 'Julien', 'Guilhem', 'Invocasombre', RoleLogo.jungleLogo),
            new Player(3, 'Florian', 'Carpentier', 'EzX Oni', RoleLogo.midLanerLogo),
            new Player(4, 'Maxime', 'Barnabé', 'VrEkEI', RoleLogo.botLogo),
            new Player(5, 'Romain', 'Fournier', 'Papaya inter', RoleLogo.supportLogo)
        ));
        allTeams.push(new Team('Petite ours brun aime la bagarre', 'EPITECH',
            new Player(1, 'Maxence', 'FOLIO', 'Ken Kànekì', RoleLogo.topLanerLogo),
            new Player(2, 'Sofian', 'CHEBBOUB', 'banlife for lag', RoleLogo.jungleLogo),
            new Player(3, 'Mathias', 'COMBALBERT', 'phalusdenoir', RoleLogo.midLanerLogo),
            new Player(4, 'Julien', 'ESPES', '1v9machLne', RoleLogo.botLogo),
            new Player(5, 'Ali', 'MHREZ', 'Aryath', RoleLogo.supportLogo)
        ));


        var fakeTeam = new Team('futur name', 'Futur school',
            new Player(1, 'top', 'Je suis', 'a futur top laner', RoleLogo.topLanerLogo),
            new Player(2, 'jungle', 'Je suis', 'a futur jungle', RoleLogo.jungleLogo),
            new Player(3, 'mid', 'Je suis', 'a futur mid laner', RoleLogo.midLanerLogo),
            new Player(4, 'adc', 'Je suis', 'a futur bop laner', RoleLogo.botLogo),
            new Player(5, 'supp', 'Je suis', 'a futur support', RoleLogo.supportLogo)
        );
        allTeams.push(fakeTeam);
        allTeams.push(fakeTeam);

        this.setTeams(allTeams);
        var allPoules: Poule[] = [];
        for (let index = 0; index < allTeams.length/4; index++) {
            allPoules.push(new Poule('Poule ' + (index + 1),
                allTeams[this.TEAM_BY_POULE*index],
                allTeams[this.TEAM_BY_POULE*index + 1],
                allTeams[this.TEAM_BY_POULE*index + 2],
                allTeams[this.TEAM_BY_POULE*index + 3]
            ));
        }
        this.setPoules(allPoules);
        var matchsPoule: MatchsPoule[] = [];
        allPoules.forEach( poule => matchsPoule.push(new MatchsPoule(poule)));
        this.setMatchs(matchsPoule);
    }

    private addArticles(): void {
        this.setArticles([
            new Article(1, 'Welcome to Toulouse League Cup', "C'est l'ouverture du tournoi inter-école organisé par SOPRA STERIA pour les étudients de la région toulousaine ! Les inscriptions sont ouvertes et les entrainements commencent !")
        ]);
    }
}