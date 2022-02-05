export default class FlagsModel {

    png: string = "";
    svg: string = "";

    constructor(obj?: Partial<FlagsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}