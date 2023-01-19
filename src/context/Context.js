import React, {createContext, useState, useEffect}from 'react'
import {ActivityIndicator} from 'react-native'
import axios from '../utils/axios'

const CurrencyContext = createContext();

const CurrencyProvider =(props) => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchpairs = async() => {
                const results = await axios.get('/v3/accounts/101-004-14328428-002/pricing?instruments=AUD_CAD%2CAUD_CHF%2CAUD_NZD%2CAUD_USD%2CCAD_CHF%2CCAD_JPY%2CEUR_AUD%2CEUR_CAD%2CEUR_CHF%2CEUR_GBP%2CEUR_NZD%2CEUR_USD%2CGBP_AUD%2CGBP_CAD%2CGBP_CHF%2CGBP_NZD%2CGBP_USD%2CNZD_CAD%2CNZD_CHF%2CUSD_CAD%2CUSD_CHF%2CEUR_ZAR')
                setData(results.data)
                setIsloading(false)
            }
            fetchpairs() 
        },1000)
      }, []);

      if(isLoading) {
        return (
            <ActivityIndicator size="large"/>
        )
    }else
    return (
        <CurrencyContext.Provider
        value={{
            data,
            setData,
            isLoading,
            setIsloading
        }}>
            {props.children}
        </CurrencyContext.Provider>  
    )
}

export {CurrencyProvider, CurrencyContext}
