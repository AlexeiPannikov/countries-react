import CountryModel from "../CountryModel";

export default class GetAllCountriesResponse {

    allCountries: CountryModel[] = [];

    constructor(obj?: Partial<GetAllCountriesResponse>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}