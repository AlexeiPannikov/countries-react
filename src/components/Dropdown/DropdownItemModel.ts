export default class DropdownItemModel {



    constructor(obj?: Partial<DropdownItemModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}