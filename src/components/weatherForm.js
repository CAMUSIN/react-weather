import { useState } from "react"

import styles from "./weatherForm.module.css";

export default function WeatherForm({onChangeCity}){
    const [city,setCity] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }

    function onChange(e){
        const value = e.target.value;
        if(value !== ''){
            setCity(value);
        }
    }

    return <form className={styles.container} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" onChange={onChange}/>
    </form>
}