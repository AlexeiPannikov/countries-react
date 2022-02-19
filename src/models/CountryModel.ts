import CapitalInfoModel from "./CapitalInfoModel";
import CarModel from "./CarModel";
import CoatOfArmsModel from "./CoatOfArmsModel";
import CurrenciesModel from "./CurrenciesModel";
import DemonymsModel from "./DemonymsModel";
import FlagsModel from "./FlagsModel";
import GiniModel from "./GiniModel";
import IddModel from "./IddModel";
import MapsModel from "./MapsModel";
import NameModel from "./NameModel";
import PostalCodeModel from "./PostalCodeModel";
import TranslationsModel from "./TranslationsModel";

export default class CountryModel {
    // altSpellings: string[] = [];
    // area: number = 0;
    borders: string[] = [];
    capital: string[] = [];
    // capitalInfo: CapitalInfoModel = new CapitalInfoModel();
    // car: CarModel = new CarModel();
    // cca2: string = "";
    cca3: string = "";
    // ccn3: string = "";
    // cioc: string = "";
    // coatOfArms: CoatOfArmsModel = new CoatOfArmsModel();
    // continents: string[] = [];
    currencies: {} = {};
    // demonyms: DemonymsModel = new DemonymsModel();
    // fifa: string = "";
    // flag: string = "";
    flags: FlagsModel = new FlagsModel();
    // gini: GiniModel = new GiniModel();
    // idd: IddModel = new IddModel();
    // independent: boolean = false;
    // landlocked: boolean = false;
    languages: {} = {};
    // latlng: number[] = [];
    // maps: MapsModel = new MapsModel();
    name: NameModel = new NameModel();
    population: number = 0;
    // postalCode: PostalCodeModel = new PostalCodeModel();
    region: string = "";
    // startOfWeek: string = "";
    // status: string = "";
    subregion: string = "";
    // timezones: string[] = [];
    // tld: string[] = [];
    // translations: TranslationsModel = new TranslationsModel();
    // unMember: boolean = false;

    constructor(obj?: Partial<CountryModel>) {
        if (obj) {
            Object.assign(this, obj)
        }
    }
}