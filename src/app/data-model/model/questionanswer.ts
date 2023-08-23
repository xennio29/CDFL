export class QuestionAnswer {
    public question: string;
    public answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
   }

   public static allQA: QuestionAnswer[] = [
    {
        question: "Est ce que je peux participer à la CDF Legacy même si je ne suis pas français ?",
        answer: "Oui bien sur.",
    },
    {
        question: "Comment dois je faire pour homologuer mon event en tant que Open Qualifier ?",
        answer: "En soit absolument rien mais si ce n'est l'indiquer aux joueurs lors de l'annonce de l'évènement.",
    },
    {
        question: "Que dois je faire pour enregistré les joueurs qualifiés ?",
        answer: "Après l'évènement, il faut que l'organisateur d'envoyer par mail à coupedefrancelegacy@gmail.com les informations suivantes : Nom de l'event, nombre de personne, date, nom de l'organisateur, nom de(s) qualifié(s) et lien MTGTop8 ou export PDF.",
    },
    {
        question: "Je souhaite organiser un Open Qualifier, y a t'il des contraintes sur les lots, paf...",
        answer: "Il n'y en a absolument aucune pour le dit tournoi mais un organisateur ne peut pas faire plus de 1 open qualifier par mois.",
    },
    {
        question: "Est ce que je peux organiser un Open Qualifier en ligne ?",
        answer: "Non, le but du circuit est de mettre en avant les communautés locales.",
    },
    {
        question: "Lors des précédentes CDFL il y avait 1/2€ de participation pour tous les inscits, est ce toujours le cas ?",
        answer: "Nous avons pris la courageuse décision de ne pas imposer cette contrainte aux organisateurs afin de favoriser les tournois locaux.",
    },
    {
        question: "La boutique voisine a fait un Open la semaine dernière, est ce que je peux en faire un Open ce week-end ?",
        answer: "Oui bien sur, la limite de 1 open par mois concerne les organisateurs pas les zones géographiques.",
    },
    {
        question: "Est ce que les proxies sont autorisées lors des évènement CDF Legacy ?",
        answer: "C'est l'organisateur du tournoi qui fait a la responsabilité de ce choix. La CDFL ne souhaite pas influencer les TO sur le sujet.",
    },
    {
        question: "Je souhaite stream / filmer / monter des vidéos de Magic de partie d'event CDFL, y a t il des contrainte ?",
        answer: " En soit aucune, mais par courtoisie merci d'ajouter le logo de la CDFL. Il ne faut cependant pas oublier que la CDFL en est charge du circuit et que chaque organisateur est responsable de son tournoi donc il faudra son accord pour créé du contenu sur des parties chez lui.",
    },
    {
        question: "Qui est derrière la CDFL",
        answer: "Nous sommes un petit groupe de pationné de Legacy qui souhaite faire revenir le meilleur format de Magic dans les boutiques et associations.",
    },
    {
        question: "Ou aura lieu la finale ?",
        answer: "La finale se déroulera à Lyon.",
    },
    {
        question: "Pourquoi avoir choisi ces villes pour les Grand Opens ?",
        answer: "Le but était que chaque personne en France puisse avoir au moins un gros tournoi près de chez lui ainsi des villes aux quatres coins de la France on été choisie.",
    },
   ];
}
