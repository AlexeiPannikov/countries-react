export default class DropdownItemModel {

    name: string = "";
    value: string | number = "";
    isActive: boolean = false;

    constructor(obj?: Partial<DropdownItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}