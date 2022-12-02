
import styles from "./home.module.css";


const Home = () => {
return (
    
    <div className={styles.container}style={{ backgroundImage: "url(/image1.png)" }}>
        <div className={styles.contact}>
            <a href="http://youtube.com">Contact us</a></div>
        <div className={styles.about}>
            <a href="http://gmail.com"></a> About us</div>

        <div className={styles.text}>
            <h1>Find over 10 thousand nature books in Tinker.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </div>
);
};

export default Home;