export default class USDModel {

    name: string = "";
    symbol: string = "";

    constructor(obj?: Partial<USDModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}