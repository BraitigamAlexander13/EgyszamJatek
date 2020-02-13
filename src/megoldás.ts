import Játékos from "./játékos";
import fs from "fs";
Játékos;
class Megoldás {
    private _játékosok: Játékos[] = [];
    public constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n");
    }
}
