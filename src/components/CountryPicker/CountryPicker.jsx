import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handelCountryChange }) => {
    const [fechedCountries, setFechedCountries] = useState([]);

    useEffect(()=>{
        const fechAPI = async() =>{
            setFechedCountries(await fetchCountries());
        }
        fechAPI();
    }, [setFechedCountries])

return(
    <FormControl className={styles.formControl}>
        <NativeSelect defaultValue='' onChange={(e)=> handelCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fechedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
    )
}
export default CountryPicker;