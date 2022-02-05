import DemonymsItemModel from "./DemonymsItemModel";

export default class DemonymsModel {

    eng: DemonymsItemModel= new DemonymsItemModel();
    fra: DemonymsItemModel= new DemonymsItemModel();

    constructor(obj?: Partial<DemonymsModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}