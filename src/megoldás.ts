import Játékos from "./játékos";
import fs from "fs";
import { getHeapStatistics } from "v8";
Játékos;
export default class Megoldás {
    private _játékosok: Játékos[] = [];
    public get játékosokSzáma(): number {
        return this._játékosok.length;
    }
    public constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktsor: string = i.trim();
                this._játékosok.push(new Játékos(aktsor));
            });
    }
}
