export class QuestionAnswer {
    public question: string;
    public answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
   }

   public static allQA: QuestionAnswer[] = [
    {
        question: "Si je suis déjà qualifié et que je gagne une autre place qualificative, que ce passe t'il ?",
        answer: "La place \"descend\" jusqu'au prochain joueur non qualifié.",
    },
    {
        question: "Comment être sur que je suis qualifié ?",
        answer: "Une fois que l'organisateur nous aura envoyé les qualifiés, l'onglet \"Joueurs Qualifié\"sera mis à jour.",
    },
    {
        question: "Pourquoi un \"système de qualifié\" plutôt qu'un \"système de bye\" ?",
        answer: "Un \"système de bye\" a pour défaut d'être compliqué à gere pour les organisateurs et créé des top8 plus serrés qu'ils ne devraient. Un \"système de qualifié\" lui a peu de défaut si ce n'est qu'il restreint l'entrée mais le but de la CDF a toujours été d'être selectif.",
    },
    {
        question: "Est-ce que je peux participer à la CDF Legacy même si je ne suis pas Français ?",
        answer: "Oui bien sur.",
    },
    {
        question: "Comment puis-je enregistrer mon événement comme Open Qualifier ?",
        answer: "Il faut simplement indiquer aux joueurs que l'événement est un Open Qualifier, par exemple en ajoutant le logo de la CFDL lors de l'annonce.",
    },
    {
        question: "Que dois-je faire pour enregistrer les joueurs qualifiés ?",
        answer: "Après l'évènement, il faut que l'organisateur d'envoyer par mail à coupedefrancelegacy@gmail.com les informations suivantes : Nom de l'événement, nombre de personne, date, nom de l'organisateur, nom de(s) qualifié(s) et lien MTGTop8 ou export PDF.",
    },
    {
        question: "A partir de quand puis-je organiser une Open Qualifer CDFL ?",
        answer: "A partir du 8 septembre 2023.",
    },
    {
        question: "Je souhaite organiser des Open Qualifier, y-a-t'il des contraintes sur le nombre de tournoi qui peuvent être des d'Open Qualifier?",
        answer: "Un organisateur ne peut faire plus d'un Open Qualifier par mois."
    },
    {
        question: "Je souhaite organiser un Open Qualifier, y-a-t'il des contraintes sur les lots et le paf?",
        answer: "Il n'y en a absolument aucune contrainte pour ces aspects-là du tournoi.",
    },
    {
        question: "Est-ce que je peux organiser un Open Qualifier en ligne ?",
        answer: "Non, le but du circuit est de mettre en avant les communautés locales.",
    },
    {
        question: "Lors des précédentes CDFL il y avaient 1/2€ de participation pour tous les inscrits, est-ce toujours le cas ?",
        answer: "Nous avons pris la courageuse décision de ne pas imposer cette contrainte aux organisateurs afin de favoriser les tournois locaux.",
    },
    {
        question: "Un autre organisateur dans ma région a fait un Open Qualifier la semaine dernière, est-ce que je peux en faire un Open Qualifier ce dans le même mois ?",
        answer: "Oui bien sur, la limite de 1 Open Qualifier par mois concerne les organisateurs pas les zones géographiques.",
    },
    {
        question: "Est-ce que les proxies sont autorisées lors des évènements CDF Legacy ?",
        answer: "C'est l'organisateur du tournoi qui fait à la responsabilité de ce choix. La CDFL ne souhaite pas influencer les organisateurs sur le sujet.",
    },
    {
        question: "Je souhaite stream / filmer / monter des vidéos de Magic de partie d'event CDFL, y a-t-il des contraintes ?",
        answer: "En soi aucune, mais par courtoisie merci d'ajouter le logo de la CDFL. Il ne faut cependant pas oublier que la CDFL en est charge du circuit et que chaque organisateur est responsable de son tournoi donc il faudra son accord pour créer du contenu sur des parties chez lui.",
    },
    {
        question: "Qui est derrière la CDFL ?",
        answer: "Nous sommes un petit groupe de passionnés de Legacy qui souhaite faire revenir le meilleur format de Magic dans les boutiques et associations.",
    },
    {
        question: "Où aura lieu la finale (2024)?",
        answer: "La finale se déroulera à Lyon.",
    },
    {
        question: "Pourquoi avoir choisi ces villes pour les Grand Opens ?",
        answer: "Le but était que chaque personne en France puisse avoir au moins un gros tournoi près de chez lui ainsi des villes aux quatre coins de la France ont été choisie.",
    },
   ];
}
