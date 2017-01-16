const React = require('react');
const ReactDOM = require('react-dom');
const data = require('./data');
const ForecastUnit  = require('./ForecastUnit');
const $ = require('jquery');

class Landing extends React.Component{

    constructor (props) {
        super(props)

        this.state=data;
        this.setState = this.setState.bind(this);
        this.apiURL="http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,GB&callback=?&units=metric";
        this.apiKey='27a9ebecaccb5daf523e0d63cbdedd62'

    }

    componentDidMount (){
        let that= this;
       //Fetch JSoN FROM API
       $.getJSON(this.apiURL+"&appid=" + this.apiKey ,function(json){

            let data =json;
            let weatherData = data.list;
            let parsedWeatherData= $.map(weatherData, function(i){

                let newddate=  new Date(i.dt*1000);

                newddate.getHours() < 9 ?  newddate.getHours() : "0"+ newddate.getHours();
                  
                // double digits for numbers less than 1 - for 24hr clock
                
                 let formattedHours = newddate.getHours() < 9 ?  "0" + newddate.getHours(): newddate.getHours() ;
                 
                //reformat JSON results in retu
                return {
                    'date':newddate,
                    'hours': formattedHours,
                    'minutes':newddate.getMinutes(),
                    'day':newddate.getDate(),
                    'month':newddate.getMonth()+1,
                    'year':newddate.getFullYear(),
                    'temp':i.main.temp,
                    'weather':i.weather[0].description};

            });


            let  parsedForecasts={"list": parsedWeatherData}

            that.setState(parsedForecasts);


          })
    }

    render(){
        return(

                <div className="">
                     <div className="callout large alert text-center">
                       <h1>WeatherForecast</h1>
                       <h2>The five day weather forecast for Edinburgh</h2>
                    </div>
                     <div className=" row medium-6  columns text-center">
                        { this.state.list.map((item, index) => (
                            <ForecastUnit item={item} key={index} />
                        ))}
                     </div>
                </div>
        )

    }

}


module.exports = Landing;
