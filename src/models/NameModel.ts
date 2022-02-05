export default class NameModel {

    common: string = "";
    nativeName: {} = {};
    official: string = "";

    constructor(obj?: Partial<NameModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}