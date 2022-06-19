class Client_ {
  protected REQUEST_OPTION_: Object;
  constructor(public appId: string) {
    this.appId = appId;
    this.REQUEST_OPTION_ = {
      muteHttpExceptions: true,
    };
  }

  do_(url: string, option: Object) {
    const res = UrlFetchApp.fetch(url, option);
    const content = JSON.parse(res.getContentText());
    if (res.getResponseCode() !== 200)
      throw new Error(`Http request failed. ${content.Error.Message}`);
    return content;
  }
}

// ShoppingInformation APIs
// https://developer.yahoo.co.jp/webapi/shopping/
class ShoppingClient_ extends Client_ {
  private BASE_URL: string;
  constructor(appId: string) {
    super(appId);
    this.BASE_URL = "https://shopping.yahooapis.jp/ShoppingWebService";
  }
  itemSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V3/itemSearch", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  categoryRanking(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V2/categoryRanking", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  categorySearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V1/categorySearch", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  itemLookup(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V1/itemLookup", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  queryRankingg(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V2/queryRanking", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  shopCampaignSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/V2/json/shopCampaignSearch",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  reviewSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/V1/json/reviewSearch", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
}

// YOLP(Map) APIs
// https://developer.yahoo.co.jp/webapi/map/
class MapClient_ extends Client_ {
  private BASE_URL: string;
  constructor(appId: string) {
    super(appId);
    this.BASE_URL = "https://map.yahooapis.jp";
  }
  localSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/search/local/V1/localSearch",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  geoCoder(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/geocode/V1/geoCoder", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  reverseGeoCoder(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "geoapi/V1/reverseGeoCoder",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  weather(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/weather/V1/place", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  zipCodeSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/search/zip/V1/zipCodeSearch",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  placeinfo(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/placeinfo/V1/get", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  addressDirectory(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "search/address/V1/addressDirectory",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  building(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/inner/V1/building", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  contentsGeoCoder(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "geocode/cont/V1/contentsGeoCoder",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  shapeSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/spatial/V1/shapeSearch",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  distance(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/dis/V1/distance", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  datumConvert(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/datum/V1/datumConvert",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  altitude(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(this.BASE_URL + "/alt/V1/getAltitude", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  cassetteSearch(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/cassette/V1/cassetteSearch",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
}

// Text Analyze APIs
// https://developer.yahoo.co.jp/webapi/jlp/ma/v1/parse.html
class TextAnalyzerClient_ extends Client_ {
  private BASE_URL: string;
  constructor(appId: string) {
    super(appId);
    this.BASE_URL = "https://jlp.yahooapis.jp";
  }
  // This API supports only xml response
  /*
  jpMAparse(optionParam: Object): Object {
    if (optionParam === undefined)
    throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam['appid'] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + '/MAService/V1/parse',
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  */
  charConvert(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/JIMService/V2/conversion",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  ruby(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/FuriganaService/V2/furigana",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  proofReading(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/KouseiService/V2/kousei",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  dependencies(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/DAService/V2/parse", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  keyphrase(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/KeyphraseService/V2/extract",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
  naturalLangAnalyze(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    optionParam["output"] = "json";
    const url = buildUrl_(
      this.BASE_URL + "/NLUService/V1/analyze",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
}

// JobInfo APIs
// https://developer.yahoo.co.jp/webapi/job
class JobInfoClient_ extends Client_ {
  private BASE_URL: string;
  constructor(appId) {
    super(appId);
    this.BASE_URL = "https://job.yahooapis.jp";
  }
  jobInfo(optionParam: object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/v1/furusato/jobinfo/", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  companyInfo(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(this.BASE_URL + "/v1/furusato/company/", optionParam);
    return this.do_(url, this.REQUEST_OPTION_);
  }
  townInfo(optionParam: Object): Object {
    if (optionParam === undefined)
      throw new Error(`The 'optionParam' argument does not exist`);
    if (!isValidJson_(optionParam)) throw new Error(`Invalid argument`);
    optionParam["appid"] = this.appId;
    const url = buildUrl_(
      this.BASE_URL + "/v1/furusato/towninfo/",
      optionParam
    );
    return this.do_(url, this.REQUEST_OPTION_);
  }
}

const isValidJson_ = (value: any): Boolean => {
  try {
    JSON.stringify(value);
  } catch {
    return false;
  }
  return true;
};
const buildUrl_ = (url: string, param: Object): string => {
  const paramStr = Object.keys(param)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(param[key]);
    })
    .join("&");
  return url + (url.indexOf("?") >= 0 ? "&" : "?") + paramStr;
};

// Global function
function newShoppingClient(appId: string) {
  return new ShoppingClient_(appId);
}

function newMapClient(appId: string) {
  return new MapClient_(appId);
}

function newTextAnalyerClient(appId: string) {
  return new TextAnalyzerClient_(appId);
}

function newJobInfoClient(appId: string) {
  return new JobInfoClient_(appId);
}
