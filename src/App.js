import React from 'react';
import { Cards, Chart, CountryPicker, Symptoms } from './components'

import styles from './App.module.css'
import {fetchData} from './api'
import coronaImage from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

   async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData})
    }

    handelCountryChange = async (country) =>{
        // get the country
        console.log(country);
        // fetch the data 
        const fetchedData = await fetchData(country);
        // set the data 
        this.setState({data: fetchedData, country : country})
    }

    render(){
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handelCountryChange={this.handelCountryChange} />
                <Chart data={data} country={country}/>
                <Symptoms />                
            </div>
        );
    }
}

export default App