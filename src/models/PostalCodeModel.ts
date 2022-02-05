export default class PostalCodeModel {

    format: string = "";
    regex: string = "";

    constructor(obj?: Partial<PostalCodeModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}