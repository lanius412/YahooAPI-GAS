// Compiled using yahooapi 1.0.0 (TypeScript 4.7.4)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Client_ = /** @class */ (function () {
    function Client_(appId) {
        this.appId = appId;
        this.appId = appId;
        this.REQUEST_OPTION_ = {
            muteHttpExceptions: true
        };
    }
    Client_.prototype.do_ = function (url, option) {
        var res = UrlFetchApp.fetch(url, option);
        var content = JSON.parse(res.getContentText());
        if (res.getResponseCode() !== 200)
            throw new Error("Http request failed. ".concat(content.Error.Message));
        return content;
    };
    return Client_;
}());
// ShoppingInformation APIs
// https://developer.yahoo.co.jp/webapi/shopping/
var ShoppingClient_ = /** @class */ (function (_super) {
    __extends(ShoppingClient_, _super);
    function ShoppingClient_(appId) {
        var _this = _super.call(this, appId) || this;
        _this.BASE_URL = "https://shopping.yahooapis.jp/ShoppingWebService";
        return _this;
    }
    ShoppingClient_.prototype.itemSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V3/itemSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.categoryRanking = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V2/categoryRanking", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.categorySearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V1/categorySearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.itemLookup = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V1/itemLookup", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.queryRankingg = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V2/queryRanking", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.shopCampaignSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V2/json/shopCampaignSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    ShoppingClient_.prototype.reviewSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/V1/json/reviewSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    return ShoppingClient_;
}(Client_));
// YOLP(Map) APIs
// https://developer.yahoo.co.jp/webapi/map/
var MapClient_ = /** @class */ (function (_super) {
    __extends(MapClient_, _super);
    function MapClient_(appId) {
        var _this = _super.call(this, appId) || this;
        _this.BASE_URL = "https://map.yahooapis.jp";
        return _this;
    }
    MapClient_.prototype.localSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/search/local/V1/localSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.geoCoder = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/geocode/V1/geoCoder", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.reverseGeoCoder = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "geoapi/V1/reverseGeoCoder", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.weather = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/weather/V1/place", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.zipCodeSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/search/zip/V1/zipCodeSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.placeinfo = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/placeinfo/V1/get", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.addressDirectory = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "search/address/V1/addressDirectory", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.building = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/inner/V1/building", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.contentsGeoCoder = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "geocode/cont/V1/contentsGeoCoder", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.shapeSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/spatial/V1/shapeSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.distance = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/dis/V1/distance", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.datumConvert = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/datum/V1/datumConvert", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.altitude = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/alt/V1/getAltitude", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    MapClient_.prototype.cassetteSearch = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/cassette/V1/cassetteSearch", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    return MapClient_;
}(Client_));
// Text Analyze APIs
// https://developer.yahoo.co.jp/webapi/jlp/ma/v1/parse.html
var TextAnalyzerClient_ = /** @class */ (function (_super) {
    __extends(TextAnalyzerClient_, _super);
    function TextAnalyzerClient_(appId) {
        var _this = _super.call(this, appId) || this;
        _this.BASE_URL = "https://jlp.yahooapis.jp";
        return _this;
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
    TextAnalyzerClient_.prototype.charConvert = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/JIMService/V2/conversion", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    TextAnalyzerClient_.prototype.ruby = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/FuriganaService/V2/furigana", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    TextAnalyzerClient_.prototype.proofReading = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/KouseiService/V2/kousei", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    TextAnalyzerClient_.prototype.dependencies = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/DAService/V2/parse", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    TextAnalyzerClient_.prototype.keyphrase = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/KeyphraseService/V2/extract", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    TextAnalyzerClient_.prototype.naturalLangAnalyze = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        optionParam["output"] = "json";
        var url = buildUrl_(this.BASE_URL + "/NLUService/V1/analyze", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    return TextAnalyzerClient_;
}(Client_));
// JobInfo APIs
// https://developer.yahoo.co.jp/webapi/job
var JobInfoClient_ = /** @class */ (function (_super) {
    __extends(JobInfoClient_, _super);
    function JobInfoClient_(appId) {
        var _this = _super.call(this, appId) || this;
        _this.BASE_URL = "https://job.yahooapis.jp";
        return _this;
    }
    JobInfoClient_.prototype.jobInfo = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/v1/furusato/jobinfo/", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    JobInfoClient_.prototype.companyInfo = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/v1/furusato/company/", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    JobInfoClient_.prototype.townInfo = function (optionParam) {
        if (optionParam === undefined)
            throw new Error("The 'optionParam' argument does not exist");
        if (!isValidJson_(optionParam))
            throw new Error("Invalid argument");
        optionParam["appid"] = this.appId;
        var url = buildUrl_(this.BASE_URL + "/v1/furusato/towninfo/", optionParam);
        return this.do_(url, this.REQUEST_OPTION_);
    };
    return JobInfoClient_;
}(Client_));
var isValidJson_ = function (value) {
    try {
        JSON.stringify(value);
    }
    catch (_a) {
        return false;
    }
    return true;
};
var buildUrl_ = function (url, param) {
    var paramStr = Object.keys(param)
        .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(param[key]);
    })
        .join("&");
    return url + (url.indexOf("?") >= 0 ? "&" : "?") + paramStr;
};
// Global function
function newShoppingClient(appId) {
    return new ShoppingClient_(appId);
}
function newMapClient(appId) {
    return new MapClient_(appId);
}
function newTextAnalyerClient(appId) {
    return new TextAnalyzerClient_(appId);
}
function newJobInfoClient(appId) {
    return new JobInfoClient_(appId);
}
