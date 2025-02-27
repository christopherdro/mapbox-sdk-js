// We keep all of the constants that declare endpoints in one
// place, so that we could concievably update this for API layout
// revisions.
module.exports.DEFAULT_ENDPOINT = 'https://api.mapbox.com';
module.exports.API_GEOCODER_FORWARD = '/geocoding/v5/{dataset}/{query}.json{?proximity}';
module.exports.API_GEOCODER_REVERSE = '/geocoding/v5/{dataset}/{longitude},{latitude}.json';
module.exports.API_DIRECTIONS = '/v4/directions/{profile}/{encodedWaypoints}.json{?alternatives,instructions,geometry,steps}';
module.exports.API_DISTANCE = '/distances/v1/mapbox/{profile}';
module.exports.API_SURFACE = '/v4/surface/{mapid}.json{?layer,fields,points,geojson,interpolate,encoded_polyline}';
module.exports.API_UPLOADS = '/uploads/v1/{owner}';
module.exports.API_UPLOAD = '/uploads/v1/{owner}/{upload}';
module.exports.API_UPLOAD_CREDENTIALS = '/uploads/v1/{owner}/credentials';
module.exports.API_MATCHING = '/matching/v4/{profile}.json';
module.exports.API_DATASET_DATASETS = '/datasets/v1/{owner}';
module.exports.API_DATASET_DATASET = '/datasets/v1/{owner}/{dataset}';
module.exports.API_DATASET_FEATURES = '/datasets/v1/{owner}/{dataset}/features{?reverse,limit,start}';
module.exports.API_DATASET_FEATURE = '/datasets/v1/{owner}/{dataset}/features/{id}';
module.exports.API_TILESTATS_STATISTICS = '/tilestats/v1/{owner}/{tileset}';
module.exports.API_TILESTATS_LAYER = '/tilestats/v1/{owner}/{tileset}/{layer}';
module.exports.API_TILESTATS_ATTRIBUTE = '/tilestats/v1/{owner}/{tileset}/{layer}/{attribute}';
module.exports.API_STATIC = '/v4/{mapid}{+overlay}/{+xyz}/{width}x{height}{+retina}{.format}';
