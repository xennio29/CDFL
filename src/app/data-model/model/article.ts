export class Article {

    public id: number
    public title : string;
    public maintText: string;

    constructor(id: number, title : string, maintText: string) {
        this.id = id;
        this.title = title;
        this.maintText = maintText;
    }
}