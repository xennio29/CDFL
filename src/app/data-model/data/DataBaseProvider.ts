import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { DataBase } from "./database";
import { MockDataBase } from "./mockDataBase";

/**
 * This class create the singleton of all the data extract from a JSON file. 
 */
@Injectable({
    providedIn: 'root'
})
export class DataBaseProvider {

    public dataBaseEmitter: EventEmitter<DataBase> = new EventEmitter();

    constructor(private http: HttpClient) { }

    public loadToulouseDatabase(): void {
        this.http.get<any>('https://raw.githubusercontent.com/xennio29/PushAndRoll/data/src/assets/dataTLC.json').subscribe(data => {
            const dataBase = new DataBase(data);
            this.dataBaseEmitter.emit(dataBase);
        });
    }

    public loadMockDatabase(): void {
        this.http.get<any>('https://raw.githubusercontent.com/xennio29/TLC/main/src/assets/rules.json').subscribe(rules => {
            const mockDataBase = new MockDataBase(rules);
            this.dataBaseEmitter.emit(mockDataBase);
        });
    }
}
