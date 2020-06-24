import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
class Radar extends React.Component {
    componentDidMount(){
        let chart = am4core.create("Radar", am4charts.RadarChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = [
        {
            category: "매운맛",
            value1: 8,
            value2: 2,
            value3: 4,
            value4: 3
        },
        {
            category: "짠맛",
            value1: 11,
            value2: 4,
            value3: 2,
            value4: 4
        },
        {
            category: "단맛",
            value1: 7,
            value2: 6,
            value3: 6,
            value4: 2
        },
        {
            category: "신맛",
            value1: 13,
            value2: 8,
            value3: 3,
            value4: 2
        },
        {
            category: "쓴맛",
            value1: 12,
            value2: 10,
            value3: 5,
            value4: 1
        },
        ];

        chart.padding(20, 20, 20, 20);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.tooltipLocation = 0.5;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.horizontalCenter = "left";
        valueAxis.min = 0;

        let series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.columns.template.tooltipText = "{name}: {valueY.value}";
        series1.columns.template.width = am4core.percent(80);
        series1.name = "Series 1";
        series1.dataFields.categoryX = "category";
        series1.dataFields.valueY = "value1";
        series1.stacked = true;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.columns.template.width = am4core.percent(80);
        series2.columns.template.tooltipText = "{name}: {valueY.value}";
        series2.name = "Series 2";
        series2.dataFields.categoryX = "category";
        series2.dataFields.valueY = "value2";
        series2.stacked = true;

        let series3 = chart.series.push(new am4charts.RadarColumnSeries());
        series3.columns.template.width = am4core.percent(80);
        series3.columns.template.tooltipText = "{name}: {valueY.value}";
        series3.name = "Series 3";
        series3.dataFields.categoryX = "category";
        series3.dataFields.valueY = "value3";
        series3.stacked = true;

        let series4 = chart.series.push(new am4charts.RadarColumnSeries());
        series4.columns.template.width = am4core.percent(80);
        series4.columns.template.tooltipText = "{name}: {valueY.value}";
        series4.name = "Series 4";
        series4.dataFields.categoryX = "category";
        series4.dataFields.valueY = "value4";
        series4.stacked = true;

        chart.seriesContainer.zIndex = -1;

        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX.exportable = false;
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.exportable = false;

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.xAxis = categoryAxis;
        chart.cursor.fullWidthXLine = true;
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineX.fillOpacity = 0.1;
        chart.cursor.lineX.fill = am4core.color("#000000");
    }
    componentWillUnmount() {
        if (this.chart) {
        this.chart.dispose();
        }
    }
    render(){
        
        return (
            <>
                <div>
                    <div id="Radar" style={{ width: "100%", height: "500px" }}></div>
                </div>
                <div style={{ padding:"50px" }} />
                
        </>
        ) 
    }
}

export default Radar;