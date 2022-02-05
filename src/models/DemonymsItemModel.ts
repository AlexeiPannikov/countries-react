export default class DemonymsItemModel {

    f: string = "";
    m: string = "";

    constructor(obj?: Partial<DemonymsItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}