export default class CapitalInfoModel {
    latlng: number[] = [];

    constructor(obj?: Partial<CapitalInfoModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}