import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import "./Dashboard.css";
import TopBar from "./TopBar";

Chart.register(...registerables);

const Dashboard = ({ isOpen, handleToggle }) => {
  const [data, setData] = useState([]);
  const chartRefs = {
    intensity: useRef(null),
    likelihood: useRef(null),
    relevance: useRef(null),
    year: useRef(null),
    country: useRef(null),
    topics: useRef(null),
    region: useRef(null),
    city: useRef(null),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(process.env.REACT_APP_BASE_URL);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/data`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Object.values(chartRefs).forEach((chartRef) => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    });

    const createChart = (ctx, label, data, chartType, colors) => {
      return new Chart(ctx, {
        type: chartType,
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label,
              data: Object.values(data),
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    const aggregateData = (data, key) => {
      const aggregated = data.reduce((acc, curr) => {
        if (Array.isArray(curr[key])) {
          curr[key].forEach((item) => {
            acc[item] = (acc[item] || 0) + 1;
          });
        } else {
          acc[curr[key]] = (acc[curr[key]] || 0) + 1;
        }
        return acc;
      }, {});

      // Sort and limit to 8-10 data points
      const sortedKeys = Object.keys(aggregated).sort(
        (a, b) => aggregated[b] - aggregated[a]
      );

      const limitedKeys = sortedKeys.slice(0, 10);

      const limitedData = limitedKeys.reduce((acc, key) => {
        acc[key] = aggregated[key];
        return acc;
      }, {});

      console.log(aggregateData);
      return limitedData;
    };

    const generateColors = (count) => {
      const colors = [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(199, 199, 199, 0.6)",
        "rgba(83, 102, 255, 0.6)",
        "rgba(25, 192, 192, 0.6)",
        "rgba(225, 159, 64, 0.6)",
      ];

      return colors.slice(0, count);
    };

    const intensityData = aggregateData(data, "region");
    const likelihoodData = aggregateData(data, "country");
    const relevanceData = aggregateData(data, "topic");
    const yearData = aggregateData(data, "start_year");
    const countryData = aggregateData(data, "country");
    const topicsData = aggregateData(data, "topic");
    const regionData = aggregateData(data, "region");
    const cityData = aggregateData(data, "intensity");

    const intensityColors = generateColors(Object.keys(intensityData).length);
    const likelihoodColors = generateColors(Object.keys(likelihoodData).length);
    const relevanceColors = generateColors(Object.keys(relevanceData).length);
    const yearColors = generateColors(Object.keys(yearData).length);
    const countryColors = generateColors(Object.keys(countryData).length);
    const topicsColors = generateColors(Object.keys(topicsData).length);
    const regionColors = generateColors(Object.keys(regionData).length);
    const cityColors = generateColors(Object.keys(cityData).length);

    chartRefs.intensity.current = createChart(
      document.getElementById("intensityChart").getContext("2d"),
      "Intensity by Region",
      intensityData,
      "bar",
      intensityColors
    );

    chartRefs.likelihood.current = createChart(
      document.getElementById("likelihoodChart").getContext("2d"),
      "Likelihood by Country",
      likelihoodData,
      "pie",
      likelihoodColors
    );

    chartRefs.relevance.current = createChart(
      document.getElementById("relevanceChart").getContext("2d"),
      "Relevance by Topic",
      relevanceData,
      "polarArea",
      relevanceColors
    );

    chartRefs.year.current = createChart(
      document.getElementById("yearChart").getContext("2d"),
      "Number of Events by Year",
      yearData,
      "bar",
      yearColors
    );

    chartRefs.country.current = createChart(
      document.getElementById("countryChart").getContext("2d"),
      "Number of Events by Country",
      countryData,
      "line",
      countryColors
    );

    chartRefs.topics.current = createChart(
      document.getElementById("topicsChart").getContext("2d"),
      "Number of Events by Topic",
      topicsData,
      "bar",
      topicsColors
    );

    chartRefs.region.current = createChart(
      document.getElementById("regionChart").getContext("2d"),
      "Number of Events by Region",
      regionData,
      "doughnut",
      regionColors
    );

    chartRefs.city.current = createChart(
      document.getElementById("cityChart").getContext("2d"),
      "Number of Events by Intensity",
      cityData,
      "radar",
      cityColors
    );
  }, [data, chartRefs]);

  return (
    <div className="dashboard">
      <TopBar isOpen={isOpen} handleToggle={handleToggle} />
      <div className="page-content-container">
        <div className="v-row">
          <div className="v-col v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Intensity by Region</h4>
                  <div className="v-card-subtitle">
                    Commercial networks and enterprises
                  </div>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1312}
                  height={500}
                  role="img"
                  id="intensityChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col-md-6 v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Likelihood by Country</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={525}
                  height={500}
                  role="img"
                  id="likelihoodChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col-md-6 v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Relevance by Topic</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={525}
                  height={500}
                  role="img"
                  id="relevanceChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Number of Events by Year</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1312}
                  height={500}
                  role="img"
                  id="yearChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Number of Events by Country</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1000}
                  height={500}
                  role="img"
                  id="countryChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Number of Events by Topic</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1000}
                  height={500}
                  role="img"
                  id="topicsChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col-md-6 v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">Number of Events by Region</h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1000}
                  height={500}
                  role="img"
                  id="regionChart"
                ></canvas>
              </div>
            </div>
          </div>
          <div className="v-col-md-6 v-col-12">
            <div className="v-card v-theme--light v-card--density-default v-card--variant-elevated">
              <div className="v-card-item">
                <div className="v-card-item__content">
                  <h4 className="v-card-title">
                    Number of Events by Intencity
                  </h4>
                </div>
              </div>
              <div className="v-card-text">
                <canvas
                  width={1000}
                  height={500}
                  role="img"
                  id="cityChart"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="charts">
        <div className="chart-container">
          <canvas id="intensityChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="likelihoodChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="relevanceChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="yearChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="countryChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="topicsChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="regionChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="cityChart"></canvas>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
