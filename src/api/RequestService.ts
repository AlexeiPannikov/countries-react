import {$api} from "./api"
import CountryModel from "../models/CountryModel";

export class RequestService {
    static async getAllCountries(): Promise<CountryModel[]> {
        try {
            const res = await $api.get("/all");
            return res?.data;
        } catch (e) {
            throw e
        }
    }

    static async getCountryByName(countryName: string): Promise<CountryModel[]> {
        try {
            const name = countryName.toLocaleLowerCase();
            const res = await $api.get(`name/${name}`, {
                params: {fullText: true}
            })
            return res?.data;
        } catch (e) {
            throw e
        }
    }
}