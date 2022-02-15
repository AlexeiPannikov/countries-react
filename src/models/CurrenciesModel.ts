import USDModel from "./USDModel";

export default class CurrenciesModel {

    object: {} = {};

    constructor(obj?: Partial<CurrenciesModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}