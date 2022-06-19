# YahooAPI-GAS
Yahoo API Library for Google Apps Script

## Script ID
```
1hN6EDYP8vLBvUstN03bC82KagD1XkPp9DyQRv8BWhRg33u0ixHr6GHwz
```

## Usage
1. Get App ID (Client ID) from [Yahoo Developer](https://developer.yahoo.co.jp/start/)
2. Set App ID to Script Property { 'APP_ID' } 
```javascript
  const APP_ID = PropertiesService.getScriptProperties().getProperty('APP_ID');

  const shoppingClient = newShoppingClient(APP_ID);

  const param = {
    query: 'ネッシー',
    in_stock: true
  };
  const result = shoppingClient.itemSearch(param);
  result.hits.forEach(item => {
    console.log(`Title: ${item.name}\nPrice: ${item.price}\nURL: ${item.url}`);
  })
```

## Details
_All method return JSON response_
* newShoppingClient
  * [itemSearch](https://developer.yahoo.co.jp/webapi/shopping/shopping/v3/itemsearch.html) 
  * [categoryRanking](https://developer.yahoo.co.jp/webapi/shopping/v2/categoryRanking.html)
  * [categorySearch](https://developer.yahoo.co.jp/webapi/shopping/shopping/v1/categorysearch.html)
  * [itemLookup](https://developer.yahoo.co.jp/webapi/shopping/shopping/v1/itemlookup.html)
  * [queryRanking](https://developer.yahoo.co.jp/webapi/shopping/v2/queryranking.html)
  * [shopCampaignSearch](https://developer.yahoo.co.jp/webapi/shopping/v2/shopCampaignSearch.html)
  * [reviewSearch](https://developer.yahoo.co.jp/webapi/shopping/shopping/v1/reviewsearch.html)
* newMapClient
  * [localSearch](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/localsearch.html)
  * [geoCoder](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/geocoder.html)
  * [reverseGeoCoder](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/reversegeocoder.html)
  * [weather](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/weather.html)
  * [zipCodeSearch](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/zipcodesearch.html)
  * [placeinfo](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/placeinfo.html)
  * [addressDirectory](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/addressdirectory.html)
  * [building](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/buildingSearch.html)
  * [contentsGeoCoder](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/contentsgeocoder.html)
  * [shapeSearch](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/spatialSearch.html)
  * [distance](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/distance.html)
  * [datumConvert](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/datum.html)
  * [altitude](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/altitude.html)
  * [cassetteSearch](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/cassetteSearch.html)
* newTextAnalyzerClient
  * [charConvert](https://developer.yahoo.co.jp/webapi/jlp/jim/v2/conversion.html)
  * [ruby](https://developer.yahoo.co.jp/webapi/jlp/furigana/v2/furigana.html)
  * [proofReading](https://developer.yahoo.co.jp/webapi/jlp/kousei/v2/kousei.html)
  * [dependencies](https://developer.yahoo.co.jp/webapi/jlp/da/v2/parse.html)
  * [keyphrase](https://developer.yahoo.co.jp/webapi/jlp/keyphrase/v2/extract.html)
  * [naturalLangAnalyze](https://developer.yahoo.co.jp/webapi/jlp/nlu/v1/index.html)
* newJobInfoClient
  * [jobInfo](https://developer.yahoo.co.jp/webapi/job/v1/jobinfo.html)
  * [companyInfo](https://developer.yahoo.co.jp/webapi/job/v1/company.html)
  * [townInfo](https://developer.yahoo.co.jp/webapi/job/v1/towninfo.html)

## TODO
* [Morphological Analysis](https://developer.yahoo.co.jp/webapi/jlp/ma/v1/parse.html) API can only support XML resposne yet.
