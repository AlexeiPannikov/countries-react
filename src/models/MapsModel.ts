export default class MapsModel {

    googleMaps: string = "";
    openStreetMaps: string = "";

    constructor(obj?: Partial<MapsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}