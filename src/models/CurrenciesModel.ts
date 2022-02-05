import USDModel from "./USDModel";

export default class CurrenciesModel {

    USD: USDModel = new USDModel();

    constructor(obj?: Partial<CurrenciesModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}