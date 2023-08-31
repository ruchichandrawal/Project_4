let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetMap</a> contributors'});
let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});

let baseMaps = {"Street Map": street, "Topographic Map": topo};

//disorder layer groups
let schizo = new L.LayerGroup();
let depressive = new L.LayerGroup();
let anxiety = new L.LayerGroup();
let bipolar = new L.LayerGroup();
let eds = new L.LayerGroup();

let overlaymaps = {Schizophrenia:schizo, Depression:depressive, Anxiety:anxiety, Bipolar:bipolar, EatingDisorders:eds};

let OurMap = L.map("map",{center:[41.90, 12.49], zoom:3.5, layers:[street, schizo, depressive, anxiety, bipolar, eds]});

L.control.layers(baseMaps, overlaymaps, {collapsed:false}).addTo(OurMap);

let queryUrl = "./geojson.geojson"

d3.json(queryUrl).then(function (data) {

   /*  data.features = data.features.filter(function (f) {

        return f.properties.topic == "Schizophrenia Rate"

    })
    data.features = data.features.filter(function (f) {

        return f.properties.topic == "Depression Rate"

    })
    data.features = data.features.filter(function (f) {

        return f.properties.topic == "Anxiety Rate"

    })
    data.features = data.features.filter(function (f) {

        return f.properties.topic == "Bipolar Rate"

    })
    data.features = data.features.filter(function (f) {

        return f.properties.topic == "Eating Disorder Rate"

    })
    console.log(data.features); */

    function markerSize_schizo(datavalue) {
        return datavalue * 25;
    }

    function markerSize_depression(datavalue) {
        return datavalue * 2;
    }

    function markerSize_anxiety(datavalue) {
        return datavalue * 2;
    }

    function markerSize_bipolar(datavalue) {
        return datavalue * 12;
    }

    function markerSize_ed(datavalue) {
        return datavalue * 30;
    }

    function markerColor_schizo(overall_schizo) {
        return overall_schizo > 0.35 ? '#ff0000' :
            overall_schizo > 0.3 ? '#ffbb00' :
            overall_schizo > 0.25 ? '#dd6600' :
            overall_schizo > 0.2 ? '#00bb00' :
                '#0000ff';
    }

     function markerColor_depression(overall_depression) {
        return overall_depression > 5 ? '#ff0000' :
        overall_depression > 4 ? '#ffbb00' :
        overall_depression > 3 ? '#dd6600' :
        overall_depression > 2 ? '#00bb00' :
            '#0000ff';
    }

    function markerColor_anxiety(overall_anxiety) {
        return overall_anxiety > 7 ? '#ff0000' :
        overall_anxiety > 5.5 ? '#ffbb00' :
        overall_anxiety > 4 ? '#dd6600' :
        overall_anxiety > 2.5 ? '#00bb00' :
            '#0000ff';
    }

    function markerColor_bipolar(overall_bipolar) {
        return overall_bipolar > 0.7 ? '#ff0000' :
        overall_bipolar > 0.55 ? '#ffbb00' :
        overall_bipolar > 0.4 ? '#dd6600' :
        overall_bipolar > 0.25 ? '#00bb00' :
            '#0000ff';
    }

    function markerColor_ed(overall_ed) {
        return overall_ed > 0.4 ? '#ff0000' :
            overall_ed > 0.3 ? '#ffbb00' :
            overall_ed > 0.2 ? '#dd6600' :
            overall_ed > 0.1 ? '#00bb00' :
            '#0000ff';
    }

    function styleInfo_schizo(feature) {
        return {
            radius: markerSize_schizo(feature.properties["Schizophrenia Rate"]),
            fillColor: markerColor_schizo(feature.properties["Schizophrenia Rate"]),
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng)
        },
        
        style: styleInfo_schizo,

        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
    <h3>${feature.properties.Entity}</h3>
    <hr>
    <p>Incidence rate of Schizophrenia is ${feature.properties["Schizophrenia Rate"]}% of population</p>
   
      `);
        }

    }).addTo(schizo);

    function styleInfo_depression(feature) {
        return {
            radius: markerSize_depression(feature.properties["Depression Rate"]),
            fillColor: markerColor_depression(feature.properties["Depression Rate"]),
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        
        style: styleInfo_depression,

        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
            <h3>${feature.properties.Entity}</h3>
            <hr>
            <p>Incidence rate of Depression is ${feature.properties["Depression Rate"]}% of population</p>
   
      `);
        }

    }).addTo(depressive);

    function styleInfo_anxiety(feature) {
        return {
            radius: markerSize_anxiety(feature.properties["Anxiety Rate"]),
            fillColor: markerColor_anxiety(feature.properties["Anxiety Rate"]),
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        
        style: styleInfo_anxiety,

        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
            <h3>${feature.properties.Entity}</h3>
            <hr>
            <p>Incidence rate of Anxiety is ${feature.properties["Anxiety Rate"]}% of population</p>
   
      `);
        }

    }).addTo(anxiety);

    function styleInfo_bipolar(feature) {
        return {
            radius: markerSize_bipolar(feature.properties["Bipolar Rate"]),
            fillColor: markerColor_bipolar(feature.properties["Bipolar Rate"]),
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        
        style: styleInfo_bipolar,

        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
            <h3>${feature.properties.Entity}</h3>
            <hr>
            <p>Incidence rate of Bipolar Disorder is ${feature.properties["Bipolar Rate"]}% of population</p>
   
      `);
        }

    }).addTo(bipolar);

    function styleInfo_ed(feature) {
        return {
            radius: markerSize_ed(feature.properties["ED Rate"]),
            fillColor: markerColor_ed(feature.properties["ED Rate"]),
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        
        style: styleInfo_ed,

        onEachFeature: function onEachFeature(feature, layer) {
            layer.bindPopup(`
            <h3>${feature.properties.Entity}</h3>
            <hr>
            <p>Incidence rate of all Eating Disorders is ${feature.properties["ED Rate"]}% of population</p>
   
      `);
        }

    }).addTo(eds);

    /* let legend_schizo = L.control({ position: 'bottomright' });
    legend_schizo.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 200, 300],
            labels = [];

        div.innerHTML += 'Range <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor_schizo(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
    
     legend_schizo.addTo(OurMap);
    
    let legend_depression = L.control({ position: 'bottomright' });
    legend_depression.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 200, 300],
            labels = [];

        div.innerHTML += 'Range <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor_depression(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
    
    legend_depression.addTo(OurMap);

    let legend_anxiety = L.control({ position: 'bottomright' });
    legend_anxiety.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 200, 300],
            labels = [];

        div.innerHTML += 'Range <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor_anxiety(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
    
    legend_anxiety.addTo(OurMap);
    
    let legend_bipolar = L.control({ position: 'bottomright' });
    legend_bipolar.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 200, 300],
            labels = [];

        div.innerHTML += 'Range <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor_bipolar(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
    
    legend_bipolar.addTo(OurMap);

    let legend_ed = L.control({ position: 'bottomright' });
    legend_ed.onAdd = function (map) {
        let div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 100, 200, 300],
            labels = [];

        div.innerHTML += 'Range <br>'
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor_ed(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
    
    legend_ed.addTo(OurMap);

     let info_schizo = L.control();

    info_schizo.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };
    
    info_schizo.update = function (props) {
        this._div.innerHTML = '<h4>Incidence rate of Schizophrenia </h4>' +
            'Circle Radius is a function of DataValue' +
            '<br>' +
            'Circle color is a function of Range';
    };

    info_schizo.addTo(OurMap);

    let info_depression = L.control();

    info_depression.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };
    
    info_depression.update = function (props) {
        this._div.innerHTML = '<h4>Incidence rate of Depression </h4>' +
            'Circle Radius is a function of DataValue' +
            '<br>' +
            'Circle color is a function of Range';
    };

    info_depression.addTo(OurMap);

    let info_anxiety = L.control();

    info_anxiety.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };
    
    info_anxiety.update = function (props) {
        this._div.innerHTML = '<h4>Incidence rate of Anxiety </h4>' +
            'Circle Radius is a function of DataValue' +
            '<br>' +
            'Circle color is a function of Range';
    };

    info_anxiety.addTo(OurMap);

    let info_bipolar = L.control();

    info_bipolar.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };
    
    info_bipolar.update = function (props) {
        this._div.innerHTML = '<h4>Incidence rate of Bipolar Disorder </h4>' +
            'Circle Radius is a function of DataValue' +
            '<br>' +
            'Circle color is a function of Range';
    };

    info_bipolar.addTo(OurMap);

    let info_ed = L.control();

    info_ed.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info'); 
        this.update();
        return this._div;
    };
    
    info_ed.update = function (props) {
        this._div.innerHTML = '<h4>Incidence rate of Eating Disorders </h4>' +
            'Circle Radius is a function of DataValue' +
            '<br>' +
            'Circle color is a function of Range';
    };

    info_ed.addTo(OurMap); */

    OurMap.on('overlayadd', function (eventLayer) {
        if (eventLayer.name === 'Schizophrenia Rate') {
            legend_schizo.addTo(OurMap);
            info_schizo.addTo(OurMap);
        } else if (eventLayer.name === 'Depression Rate') {
            legend_depression.addTo(OurMap);
            info_depression.addTo(OurMap);
        } else if (eventLayer.name === 'Anxiety Rate') {
            legend_anxiety.addTo(OurMap);
            info_anxiety.addTo(OurMap);
        } else if (eventLayer.name === 'Bipolar Rate') {
            legend_bipolar.addTo(OurMap);
            info_bipolar.addTo(OurMap);
        } else if (eventLayer.name === 'Eating Disorder Rate') {
            legend_ed.addTo(OurMap);
            info_ed.addTo(OurMap);
        }
    });

    OurMap.on('overlayremove', function (eventLayer) {
        if (eventLayer.name === 'Schizophrenia Rate') {
            OurMap.removeControl(legend_schizo);
            OurMap.removeControl(info_schizo);
        } else if (eventLayer.name === 'Depression Rate') {
            OurMap.removeControl(legend_depression);
            OurMap.removeControl(info_depression);
        } else if (eventLayer.name === 'Anxiety Rate') {
            OurMap.removeControl(legend_anxiety);
            OurMap.removeControl(info_anxiety);
        } else if (eventLayer.name === 'Bipolar Rate') {
            OurMap.removeControl(legend_bipolar);
            OurMap.removeControl(info_bipolar);
        } else if (eventLayer.name === 'Eating Disorder Rate') {
            OurMap.removeControl(legend_ed);
            OurMap.removeControl(info_ed);
        }
    });
});