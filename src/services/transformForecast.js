import moment from "moment";
import "moment/locale/es";
import transformWeather from "./transformWeather";

const transformForecast = (forecastData) => {
  return forecastData.list
    .filter((item) => {
      const hour = moment.unix(item.dt).utc().hour();
      return hour === 6 || hour === 12 || hour === 18;
    })
    .map((item) => ({
      weekDay: moment.unix(item.dt).utc().format("ddd"),
      hour: moment.unix(item.dt).utc().hour(),
      data: transformWeather(item),
    }));
};

export default transformForecast;
