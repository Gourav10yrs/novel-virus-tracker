import React from 'react'
import styles from './Symptoms.module.css'

const Symptoms = () => {
    return(
        <div className={styles.symptoms}>
            <h4>SYMPTOMS</h4>
            <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
            <hr></hr>
            <p>Most common symptoms:</p>
            <ul>
                <li>fever</li>
                <li>dry cough</li>
                <li>tiredness</li>
            </ul>
            <p>Less common symptoms:</p>
            <ul>
                <li>aches and pains</li>
                <li>sore throat</li>
                <li>diarrhoea</li>
                <li>conjunctivitis</li>
                <li>headache</li>
                <li>loss of taste or smell</li>
                <li>a rash on skin, or discolouration of fingers or toes</li>
            </ul>
            <p>Serious symptoms:</p>
            <ul>
                <li>difficulty breathing or shortness of breath</li>
                <li>chest pain or pressure</li>
                <li>loss of speech or movement</li>
            </ul>
            <p>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</p>
            <p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
            <p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
        </div>
    )
}
export default Symptoms