import { useEffect, useState } from "react";
import giftBox from './assets/giftbox.png'
import "./Home.css"
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    const [myName, setMyName] = useState("");
    const [isCorrectWord, setIsCorrectWord] = useState(false);

    useEffect(() => {
        document.title = "SURPRISE !!"
    }, []);

    useEffect(() => {
        if (myName === "bahagia") {
            setIsCorrectWord(true);
            setTimeout(() => {
                window.location.href = "/surprise"
            }, 3000);
        }
    }, [myName]);

    return (
        <>
            <Header />
            <div className={"main-container"} >
                <div className={"sub-container"}>
                    <div className={"box-container"}>
                        {/* <p className={"font20"} style={{ marginTop: 0, marginBottom: 10 }}>Hi Lisa, please input the password first</p> */}
                        {/* <img src={giftBox} style={{ width: "20%", height: "20%", margin: 20 }} /> */}
                        <div className="box-menu" style={{backgroundColor:"khaki"}}>
                            {isCorrectWord === false ?
                                <>
                                    <p className="row" style={{color:"black"}}>Hi Lisa, please input the key first</p>
                                    <input className={"input-search"} maxLength={8} value={myName} onChange={(e) => setMyName(e.target.value.toLowerCase())} />
                                </>
                                :
                                <>
                                    <p className="correct font20">PERFECTLY!</p>
                                    <p className="correct font20">Wait the second</p>
                                </>
                            }
                        </div>
                        <div className="box-menu" style={{backgroundColor:"black", marginTop:'50px'}}>
                            <>
                                <p className="correct font20" style={{color:"khaki"}}>Semoga kamu bahagia sekarang</p>
                                <p className="correct font20" style={{color:"khaki"}}>Karena itulah kuncinya</p>
                            </>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;