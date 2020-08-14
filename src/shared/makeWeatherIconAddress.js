
export const makeWeatherIconAddress = (weatherIcon) => {
  return weatherIcon < 10
    ? "./weatherIcons/0" + weatherIcon + "-s.png"
    : "./weatherIcons/" + weatherIcon + "-s.png";
};
