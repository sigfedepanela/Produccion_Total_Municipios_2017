var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_MunicipiosProductoresdeCaaPaneleradeColombia_1 = new ol.format.GeoJSON();
var features_MunicipiosProductoresdeCaaPaneleradeColombia_1 = format_MunicipiosProductoresdeCaaPaneleradeColombia_1.readFeatures(json_MunicipiosProductoresdeCaaPaneleradeColombia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosProductoresdeCaaPaneleradeColombia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunicipiosProductoresdeCaaPaneleradeColombia_1.addFeatures(features_MunicipiosProductoresdeCaaPaneleradeColombia_1);var lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosProductoresdeCaaPaneleradeColombia_1, 
                style: style_MunicipiosProductoresdeCaaPaneleradeColombia_1,
    title: 'Municipios Productores de Caña Panelera  de Colombia <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_0.png" />  0 - 1000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_1.png" />  1000 - 2000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_2.png" />  2000 - 4000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_3.png" />  4000 - 8000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_4.png" />  8000 - 12000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_5.png" />  12000 - 16000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_6.png" />  16000 - 25000 <br />\
    <img src="styles/legend/MunicipiosProductoresdeCaaPaneleradeColombia_1_7.png" />  25000 - 41422 <br />'
        });var format_DepartamentosdeColombia_2 = new ol.format.GeoJSON();
var features_DepartamentosdeColombia_2 = format_DepartamentosdeColombia_2.readFeatures(json_DepartamentosdeColombia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeColombia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosdeColombia_2.addFeatures(features_DepartamentosdeColombia_2);var lyr_DepartamentosdeColombia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdeColombia_2, 
                style: style_DepartamentosdeColombia_2,
                title: '<img src="styles/legend/DepartamentosdeColombia_2.png" /> Departamentos de Colombia '
            });var format_ProduccindeCaaPaneleraToneladas2017_3 = new ol.format.GeoJSON();
var features_ProduccindeCaaPaneleraToneladas2017_3 = format_ProduccindeCaaPaneleraToneladas2017_3.readFeatures(json_ProduccindeCaaPaneleraToneladas2017_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduccindeCaaPaneleraToneladas2017_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ProduccindeCaaPaneleraToneladas2017_3.addFeatures(features_ProduccindeCaaPaneleraToneladas2017_3);var lyr_ProduccindeCaaPaneleraToneladas2017_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduccindeCaaPaneleraToneladas2017_3, 
                style: style_ProduccindeCaaPaneleraToneladas2017_3,
                title: '<img src="styles/legend/ProduccindeCaaPaneleraToneladas2017_3.png" /> Producción de Caña Panelera (Toneladas) - 2017'
            });

lyr_LimiteDepartamental_0.setVisible(true);lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1.setVisible(true);lyr_DepartamentosdeColombia_2.setVisible(false);lyr_ProduccindeCaaPaneleraToneladas2017_3.setVisible(false);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1,lyr_DepartamentosdeColombia_2,lyr_ProduccindeCaaPaneleraToneladas2017_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No': 'No', });
lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'Rend.(Ton/': 'Rend.(Ton/', });
lyr_DepartamentosdeColombia_2.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_ProduccindeCaaPaneleraToneladas2017_3.set('fieldAliases', {});
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', 'No': 'TextEdit', });
lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'Rend.(Ton/': 'TextEdit', });
lyr_DepartamentosdeColombia_2.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_ProduccindeCaaPaneleraToneladas2017_3.set('fieldImages', {});
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', 'No': 'inline label', });
lyr_MunicipiosProductoresdeCaaPaneleradeColombia_1.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'Rend.(Ton/': 'inline label', });
lyr_DepartamentosdeColombia_2.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_ProduccindeCaaPaneleraToneladas2017_3.set('fieldLabels', {});
lyr_ProduccindeCaaPaneleraToneladas2017_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});