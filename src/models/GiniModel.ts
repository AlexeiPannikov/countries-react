export default class GiniModel {

    2018: number = 0;

    constructor(obj?: Partial<GiniModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}