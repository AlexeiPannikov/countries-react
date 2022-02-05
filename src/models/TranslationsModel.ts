import TranslationItemModel from "./TranslationItemModel";

export default class TranslationsModel {

    ara: TranslationItemModel = new TranslationItemModel();
    ces: TranslationItemModel = new TranslationItemModel();
    cym: TranslationItemModel = new TranslationItemModel();
    deu: TranslationItemModel = new TranslationItemModel();
    est: TranslationItemModel = new TranslationItemModel();
    fin: TranslationItemModel = new TranslationItemModel();
    fra: TranslationItemModel = new TranslationItemModel();
    hrv: TranslationItemModel = new TranslationItemModel();
    hun: TranslationItemModel = new TranslationItemModel();
    ita: TranslationItemModel = new TranslationItemModel();
    jpn: TranslationItemModel = new TranslationItemModel();
    kor: TranslationItemModel = new TranslationItemModel();
    nld: TranslationItemModel = new TranslationItemModel();
    per: TranslationItemModel = new TranslationItemModel();
    pol: TranslationItemModel = new TranslationItemModel();
    por: TranslationItemModel = new TranslationItemModel();
    rus: TranslationItemModel = new TranslationItemModel();
    slk: TranslationItemModel = new TranslationItemModel();
    spa: TranslationItemModel = new TranslationItemModel();
    swe: TranslationItemModel = new TranslationItemModel();
    urd: TranslationItemModel = new TranslationItemModel();
    zho: TranslationItemModel = new TranslationItemModel();

    constructor(obj?: Partial<TranslationsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}