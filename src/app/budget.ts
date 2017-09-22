export class Budget {
    id: number;
    startMoney: number;
    from: Date;
    till: Date;

    toString() {
        return "Start modey: " + this.startMoney + " from: " + this.from + " till: " + this.till;
    }
}
