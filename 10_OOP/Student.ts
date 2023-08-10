import Person from "./Person.js";

export default class Student extends Person {
    private _name : string;

    constructor() {
        super();
        this._name = "";
    }

    get Name(): string {
        return this._name
    }

    set Name(value: string) {
        this._name = value;
    }
}