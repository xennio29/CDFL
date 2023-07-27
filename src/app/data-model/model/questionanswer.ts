export class QuestionAnswer {
    public question: string;
    public answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
   }

   public static allQA: QuestionAnswer[] = [
    {
        question: "This is a question ?",
        answer: "This is an answer.",
    },
    {
        question: "This is an other question ?",
        answer: "This is an other answer.",
    },
    {
        question: "This is an other other question ?",
        answer: "This is an other other answer.",
    }
   ];
}