export default class Játékos {
    private _név: string;
    private _tippek: number[] = [];
    public constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._név = m[0];
        for (let i = 1; i < m.length; i++) {
            this._tippek.push(parseInt(m[i]));
        }
    }
}
