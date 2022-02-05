export default class CarModel {

    side: string = "";
    signs: string[] = [];

    constructor(obj?: Partial<CarModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}