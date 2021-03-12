require([
        "esri/config",
        "esri/Map",
        "esri/layers/FeatureLayer",
        "esri/views/MapView",
        "esri/WebMap",
        "esri/widgets/Legend",
        "dojo/domReady!"], function(esriConfig, Map, FeatureLayer, MapView, WebMap, Legend) {
  esriConfig.apiKey = "AAPK67d1cbf28ed14c1c804f49a6042c44fd2XwMIGFEEdYuovdTBQtKKb1PMP69IoYvFscedg6eV5dZFRTrIGP1cEltoyLjQkd-";

        var map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });
        
        var view = new MapView({
          map: map,
          center: [-90.29, 38.63], // Longitude, latitude
          zoom: 9, // Zoom level
          container: "viewDiv" // Div element
        });
        
  
  var template = {
        title: "Individuals in parcel: {number_peo}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "hour_of_day",
            label: "Hour of day: ",
            visible: true
          }, {
            fieldName: "number_peo",
            label: "Unique pings: ",
            visible: true
          }, {
            fieldName: "USE_CODE_S",
            label: "Parcel use code: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }]
        }]
      };
  var parcels_4pm = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/4pm_parcel_dots_8_1_19/FeatureServer",
        outFields: ["*"],
        popupTemplate: template
      }); 
        
        map.add(parcels_4pm);
  
  var parcels10_4pm = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/ten_person_parcels_4pm/FeatureServer"
      });
  
  var symbol = {
          type: "simple-marker",
  style: "circle",
  color: "cyan",
  size: "10px",
        };
  
  parcels10_4pm.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: symbol
      }; 
       
        map.add(parcels10_4pm);
 
      });
