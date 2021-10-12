export class Rules {

    private htmlRules: string = "";

    constructor(private jsonRules: any) {
        this.addTitle(jsonRules.title);
        this.addChapters(jsonRules.chapters);
    }

    private append(text: string) {
        this.htmlRules = this.htmlRules + text;
    }

    private addTitle(title: string) {
        this.append(`<h1 class="test">` + title + `</h1>`);
    }

    private addChapters(chapters: any) {
        for (let index = 0; index < chapters.length; index++) {
            this.addChapter(chapters[index], index);
        }
    }

    private addChapter(chapter: any, index: number) {
        this.addChapterTitle(chapter.title, index + 1);
        this.addChapterContent(chapter.content);
    }

    private addChapterTitle(addChapterTitle: any, indexP1: number) {
        this.append(`<h2>CHAPITRE ` + indexP1 + ' : ' + addChapterTitle + `</h2>`);
    }

    private addChapterContent(content: any) {
        this.append(`<p>`);
        content.forEach(paragraphe => this.addChapterParagraphe(paragraphe));
        this.append(`</p>`);
    }

    private addChapterParagraphe(paragraphe: any) {
        this.append(paragraphe + `<br>`);
    }


    getContent() {
        return this.htmlRules;
    }
}