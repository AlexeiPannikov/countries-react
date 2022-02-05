import {$api} from "./api"
import GetAllCountriesResponse from "../models/response/GetAllCountriesResponse";

export class RequestService {
    static async getAllCountries(): Promise<GetAllCountriesResponse> {
        try {
            const res = await $api.get("/all");
            return res?.data;
        } catch (e) {
            throw e
        }
    }
}