import React from 'react'
import styles from './Prevention.module.css'
import preventionImage from '../../images/download.gif'
const Prevention = () =>{
    return(
        <div className={styles.prevention}>
            <div className={styles.intro}>
                <img src={preventionImage} className={styles.imgPrevention} alt="Prevention"/>
                <h2 className={styles.headText}>STAY HOME.SAVE LIVES.</h2>
                <div className={styles.W7Av8d}>Help stop coronavirus</div>
                <div className={styles.ptUM8e}>
                    <div><span className={styles.cu62s}>1</span><span className={styles.V4tsWe}>STAY</span><span>home</span></div>
                    <div><span className={styles.cu62s}>2</span><span className={styles.V4tsWe}>KEEP</span><span>a safe distance</span></div>
                    <div><span className={styles.cu62s}>3</span><span className={styles.V4tsWe}>WASH</span><span>hands often</span></div>
                    <div><span className={styles.cu62s}>4</span><span className={styles.V4tsWe}>COVER</span><span>your cough</span></div>
                    <div><span className={styles.cu62s}>5</span><span className={styles.V4tsWe}>SICK?</span><span>Call the helpline</span></div>
                </div>
            </div>
            <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.</p>
            <hr/>
            <p>To prevent the spread of COVID-19:</p>
            <ul>
                <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
                <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
                <li>Don’t touch your eyes, nose or mouth.</li>
                <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
                <li>Stay home if you feel unwell.</li>
                <li>If you have a fever, cough and difficulty breathing, seek medical attention. Call in advance.</li>
            </ul>
            <p>Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.</p>
        </div>
    )
}

export default Prevention