var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TestsbyULMbps_1 = new ol.format.GeoJSON();
var features_TestsbyULMbps_1 = format_TestsbyULMbps_1.readFeatures(json_TestsbyULMbps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyULMbps_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyULMbps_1.addFeatures(features_TestsbyULMbps_1);
var lyr_TestsbyULMbps_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyULMbps_1, 
                style: style_TestsbyULMbps_1,
                interactive: true,
    title: 'Tests by UL Mbps<br />\
    <img src="styles/legend/TestsbyULMbps_1_0.png" /> 15.5 - 20<br />\
    <img src="styles/legend/TestsbyULMbps_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/TestsbyULMbps_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/TestsbyULMbps_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/TestsbyULMbps_1_4.png" /> 80 - 100<br />\
    <img src="styles/legend/TestsbyULMbps_1_5.png" /> 100 - 118.8<br />'
        });
var format_TestsbyDLMbps_2 = new ol.format.GeoJSON();
var features_TestsbyDLMbps_2 = format_TestsbyDLMbps_2.readFeatures(json_TestsbyDLMbps_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyDLMbps_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyDLMbps_2.addFeatures(features_TestsbyDLMbps_2);
var lyr_TestsbyDLMbps_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyDLMbps_2, 
                style: style_TestsbyDLMbps_2,
                interactive: true,
    title: 'Tests by DL Mbps<br />\
    <img src="styles/legend/TestsbyDLMbps_2_0.png" /> 28 - 200<br />\
    <img src="styles/legend/TestsbyDLMbps_2_1.png" /> 200 - 400<br />\
    <img src="styles/legend/TestsbyDLMbps_2_2.png" /> 400 - 600<br />\
    <img src="styles/legend/TestsbyDLMbps_2_3.png" /> 600 - 800<br />\
    <img src="styles/legend/TestsbyDLMbps_2_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/TestsbyDLMbps_2_5.png" /> 1000 - 1034<br />'
        });
var format_TestsbyRSRP_3 = new ol.format.GeoJSON();
var features_TestsbyRSRP_3 = format_TestsbyRSRP_3.readFeatures(json_TestsbyRSRP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestsbyRSRP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestsbyRSRP_3.addFeatures(features_TestsbyRSRP_3);
var lyr_TestsbyRSRP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestsbyRSRP_3, 
                style: style_TestsbyRSRP_3,
                interactive: true,
    title: 'Tests by RSRP<br />\
    <img src="styles/legend/TestsbyRSRP_3_0.png" /> -96 - -90<br />\
    <img src="styles/legend/TestsbyRSRP_3_1.png" /> -90 - -80<br />\
    <img src="styles/legend/TestsbyRSRP_3_2.png" /> -80 - -70<br />\
    <img src="styles/legend/TestsbyRSRP_3_3.png" /> -70 - -62<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_TestsbyULMbps_1.setVisible(false);lyr_TestsbyDLMbps_2.setVisible(false);lyr_TestsbyRSRP_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TestsbyULMbps_1,lyr_TestsbyDLMbps_2,lyr_TestsbyRSRP_3];
lyr_TestsbyULMbps_1.set('fieldAliases', {'Test_id': 'Test_id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyDLMbps_2.set('fieldAliases', {'Test_id': 'Test_id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyRSRP_3.set('fieldAliases', {'Test_id': 'Test_id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'App': 'App', 'Provider': 'Provider', 'DL Mbps': 'DL Mbps', 'UL Mbps': 'UL Mbps', 'Status': 'Status', 'Spectrum band': 'Spectrum band', 'Cell ID': 'Cell ID', 'Physical Cell ID': 'Physical Cell ID', 'Network': 'Network', 'Network Subtype': 'Network Subtype', 'signal_strength': 'signal_strength', 'rssi': 'rssi', 'csi_rsrp': 'csi_rsrp', 'csi_rsrq': 'csi_rsrq', 'csi_sinr': 'csi_sinr', 'tests.download.cells.beginning.arfcn': 'tests.download.cells.beginning.arfcn', 'Download Server': 'Download Server', 'Timestamp': 'Timestamp', 'Test Result': 'Test Result', });
lyr_TestsbyULMbps_1.set('fieldImages', {'Test_id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyDLMbps_2.set('fieldImages', {'Test_id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyRSRP_3.set('fieldImages', {'Test_id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'App': 'TextEdit', 'Provider': 'TextEdit', 'DL Mbps': 'TextEdit', 'UL Mbps': 'TextEdit', 'Status': 'TextEdit', 'Spectrum band': 'TextEdit', 'Cell ID': 'Range', 'Physical Cell ID': 'Range', 'Network': 'TextEdit', 'Network Subtype': 'TextEdit', 'signal_strength': 'Range', 'rssi': 'Range', 'csi_rsrp': 'Range', 'csi_rsrq': 'Range', 'csi_sinr': 'Range', 'tests.download.cells.beginning.arfcn': 'Range', 'Download Server': 'TextEdit', 'Timestamp': 'DateTime', 'Test Result': 'TextEdit', });
lyr_TestsbyULMbps_1.set('fieldLabels', {'Test_id': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyDLMbps_2.set('fieldLabels', {'Test_id': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyRSRP_3.set('fieldLabels', {'Test_id': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'App': 'header label', 'Provider': 'header label', 'DL Mbps': 'header label', 'UL Mbps': 'header label', 'Status': 'header label', 'Spectrum band': 'header label', 'Cell ID': 'header label', 'Physical Cell ID': 'header label', 'Network': 'header label', 'Network Subtype': 'header label', 'signal_strength': 'header label', 'rssi': 'header label', 'csi_rsrp': 'header label', 'csi_rsrq': 'header label', 'csi_sinr': 'header label', 'tests.download.cells.beginning.arfcn': 'header label', 'Download Server': 'header label', 'Timestamp': 'header label', 'Test Result': 'header label', });
lyr_TestsbyRSRP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});