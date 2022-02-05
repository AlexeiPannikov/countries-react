export default class IddModel {

    root: string = "";
    suffixes: number[] = [];

    constructor(obj?: Partial<IddModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}