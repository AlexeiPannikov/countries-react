export default class CoatOfArmsModel {

    png: string = "";
    svg: string = "";

    constructor(obj?: Partial<CoatOfArmsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}