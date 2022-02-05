export default class TranslationItemModel {

    official: string = "";
    common: string = "";

    constructor(obj?: Partial<TranslationItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}