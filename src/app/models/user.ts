export class User {
    constructor(public _id?: string, public name: string = '', public coins: number = 100, public moves: Array<any> = []) {
    }
    setId?(length = 24) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}