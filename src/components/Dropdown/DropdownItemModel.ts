export default class DropdownItemModel {

    name: string = "";
    value: string | number = "";

    constructor(obj?: Partial<DropdownItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}