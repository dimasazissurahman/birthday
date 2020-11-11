import "./Home.css"
import { useEffect, useState } from "react";
import photo1 from './assets/lisaPhoto1.png';
import photo2 from './assets/lisaPhoto2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photoberdua.jpeg';
import photo6 from './assets/photoberdua1.JPEG';
import photo7 from './assets/photolisa4.PNG';
import photo8 from './assets/selfie1.JPEG';
import photo9 from './assets/IMG_5897.jpg';
import dropdownDown from './assets/dropdown.png';
import dropdownUp from './assets/dropdownUp.png';
import video1 from './assets/videos/video1.MOV';
import video2 from './assets/videos/video2.MOV';
import video3 from './assets/videos/video3.MOV';
import video4 from './assets/videos/video4.MOV';
import video5 from './assets/videos/video5.MOV';
import video6 from './assets/videos/video6.MOV';
import video7 from './assets/videos/video7.MOV';
import Header from "./Header";
import Footer from "./Footer";

const Surprise = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isGalleryActive, setIsGalleryActive] = useState(false);
    const [dropDown, setDropDown] = useState(true);
    const [dropDown1, setDropDown1] = useState(true);
    const [theKey, setTheKey] = useState("");
    const [isCorrectWord, setIsCorrectWord] = useState(false);
    const [openInvitation, setOpenInvitation] = useState(false);

    useEffect(() => {
        document.title = "The Story"
    }, []);

    useEffect(() => {
        if (theKey === "itu") {
            setIsCorrectWord(true);
        }
    })

    const handleClickShow = () => {
        if (showMenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    const handleDropDown = () => {
        if (dropDown === true) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    }

    const handleDropDown1 = () => {
        if (dropDown1 === true) {
            setDropDown1(false);
        } else {
            setDropDown1(true);
        }
    }

    const arrayPhoto = [
        photo9,
        photo2,
        photo3,
        photo4,
        photo6,
        photo8
    ]

    const arrayVideo = [
        video1,
        video2,
        video3,
        video4,
        video5,
        video6,
        video7
    ]

    const Story = (
        <div className={"story-container"}>
            {/* {isCorrectWord === false ?
                <>
                    <p>Are you ready to read all the story</p>
                    <p className="row" style={{ color: "black" }}>Please input the key first to open the story</p>
                    <input className={"input-search"} maxLength={8} value={theKey} onChange={(e) => setTheKey(e.target.value.toLowerCase())} />
                </>
                :
                <>
                
                    <p>Hi Lisa</p>
                    <p>Happy birthday yang ke 22</p>
                    <p>Semoga tetap bahagia</p>
                    <p>Maaf kalau emang belum bisa kasih surprise seperti yang diinginkan,
            Sederhana, semoga bisa menjadi kenangan baik.<br />
            Karena kamu sudah banyak memberikan pelajaran untuk orang ini.<br />
                        <p>
                            4 tahun orang ini mengenal dia, 4 tahun juga orang ini banyak belajar dari dia.
            Belajar mencari jati diri, belajar bagaimana untuk ikhlas, belajar bagaimana untuk bersyukur, belajar bagaimana untuk menjadi diri sendiri, dan yang terakhir belajar bagaimana untuk mencintai diri sendiri.<br />
            3 tahun lalu terakhir orang ini bertemu dia, orang ini sudah ikhlas, bahagia melihatnya bahagia, hanya bisa berdoa semoga dia bahagia di luar sana.<br />
            Sampai orang ini dipertemukan kembali dengan dia, masing-masing mencoba menampilkan impresi yang berbeda, mencoba terlihat Bahagia, hingga akhirnya menjadi terbuka.
            Bercerita pengalaman pahit yang dialaminya, orang ini yang sebelumnya Bahagia dan ikhlas kehilangannya, seketika terasa sedih mendengarnya bercerita sambil meneteskan air mata.<br />
            Ingin bertindak, tapi tidak bisa berbuat apa-apa, hanya bisa membantunya untuk menemukan kembali kebahagiaannya.<br />
            Mencoba untuk selalu ada disisinya meskipun hanya figuran dari kehidupannya.<br />
            Mencoba untuk menjadi pemeran utama, namun merasa tidak pantas untuk menjadi lawan mainnya.<br />
            Sampai dia menemukan kebahagiaannya, orang ini tersenyum penuh Bahagia.<br />
            Mendengarnya bercerita lepas penuh tawa, orang ini selalu mendengarkan.<br />
            Di setiap dia butuh, orang ini siap meninggalkan aktifitasnya.<br />
            Sampai tiba saatnya, dia sudah menemukan kebahagiaannya,
            Membuka lembar baru dengan suasana Bahagia, orang ini sudah siap ikhlas akan kehilangannya.<br />
            Orang ini mencoba menjalani kehidupannya seperti biasa, mencoba untuk membuka lembar baru juga, tapi tak bertahan lama, sampai orang ini mencoba untuk bercerita dengannya, tapi orang ini takut akan merusak kebahagiaannya dengan lembar barunya.<br />
            Sampai akhirnya orang ini memberanikan untuk bercerita, dan ternyata dia juga ingin bercerita tentang lembar barunya.<br />
            Kita dipertemukan dengan lembar baru yang tidak Bahagia.<br />
            Sebelum orang ini mendengarkannya bercerita, orang ini mencoba untuk membahagiakan diri sendiri terlebih dahulu,
            Sampai akhirnya mendengarnya bercerita, dengan kisah yang gagal.<br />
            Kembali lagi orang ini mencoba membantu dia untuk mencari letak kebahagiaan dalam dirinya.<br />
            Sampai akhirnya orang ini Bahagia, karena dia juga Bahagia, orang ini sudah ikhlas, dan siap akan kehilangannya,
            Orang ini sudah mulai merasakan kehilangan, mungkin ini akan menjadi kehilangan terakhirnya, karena orang ini merasa tidak akan kuat Ketika menemukannya kembali dengan keadaan yang tidak semestinya, dia berhak Bahagia.
            Doa dari orang ini adalah semoga dia tetap Bahagia.<br />
            Semoga orang yang dipilihnya adalah orang yang layak, yang sudah banyak mempelajari tentang dia, orang yang tidak akan memberikan kesempatan untuknya bersedih, orang yang selalu sedia untuk hadir disisinya, orang yang siap untuk menjalani kehidupan selanjutnya bersamanya Aammiin !!.
            </p>
                    </p>
                </>
            } */}
            <p>Hi Lisa</p>
            <p>Happy birthday ya yang ke 22</p>
            <p>Semoga bahagia selalu.<br />Maaf kalau emang belum bisa kasih hadiah ulang tahun yang diinginkan
                <br />Gua cuman bisa kasih hadiah ulang tahun yang sederhana aja, semoga berkesan baik</p>
            <p>Seharusnya ada cerita panjang sih dibawah ini, cuman kayaknya lu juga ga akan mau baca hehe... karena panjang, jadi gua hapus aja</p>
            <p>So, jadi disini gue kasih ucapan dan doa aja, untuk ceritanya nanti dibawah ada invitation kalau mau denger lu bisa dateng, kalo ga juga gapapa :)</p>
            <p>Doa dari orang ini adalah semoga lu tetap Bahagia.<br />
            Semoga orang yang dipilih adalah orang yang layak, yang sudah banyak mempelajari tentang lu, orang yang tidak akan memberikan kesempatan untuk lu bersedih, orang yang selalu sedia untuk hadir disisi, orang yang siap untuk menjalani kehidupan selanjutnya bersama Aammiin !!.</p>
        </div>
    )

    return (
        <div className={"main-container"} style={{ backgroundColor: "khaki" }}>
            <Header />
            <div className={"top-container"}>
                <div style={{ display: "flex" }}>
                    <img className={"photo-frame"} src={photo1} style={{ borderBottomLeftRadius: showMenu === true && 0 }} alt={"icon"} />
                    <div className={"desc-photo"}>
                        <p>Lisa Novianti</p>
                        <p>18 November 1998</p>
                        <p>More Surprise Click Button Below</p>
                        <button className={"show-btn"} onClick={() => handleClickShow()}>Show More</button>
                    </div>
                </div>
                {showMenu === true &&
                    <div>
                        <div style={{ display: "flex", padding: 15 }}>
                            <div className={isGalleryActive === false ? "isActive" : "isNotActive"} onClick={() => setIsGalleryActive(false)}>Message</div>
                            <div className={isGalleryActive === true ? "isActive" : "isNotActive"} onClick={() => setIsGalleryActive(true)}>Gallery</div>
                        </div>
                        {isGalleryActive === true ?
                            <div className={"gallery-container"} style={{ display: "grid" }}>
                                <div>
                                    <div style={{ padding: 10, display: "flex", alignItems: "center" }} onClick={() => handleDropDown()}>
                                        <p style={{ width: "90%" }}>Photos</p>
                                        <img src={dropDown === false ? dropdownDown : dropdownUp} style={{ width: 25, height: 25 }} />
                                    </div>
                                    {dropDown === false &&
                                        <>
                                            <img src={photo7} style={{ width: "90%" }} />
                                            {arrayPhoto.map((data, i) => (
                                                <img src={data} key={i} />
                                            ))}
                                            <img src={photo5} style={{ width: "90%" }} />
                                        </>
                                    }
                                </div>
                                <div>
                                    <div style={{ padding: 10, display: "flex", alignItems: "center" }} onClick={() => handleDropDown1()}>
                                        <p style={{ width: "90%" }}>Videos</p>
                                        <img src={dropDown1 === false ? dropdownDown : dropdownUp} style={{ width: 25, height: 25 }} />
                                    </div>
                                    {dropDown1 === false &&
                                        arrayVideo.map((data, i) => (
                                            <video controls muted loop key={i}>
                                                <source src={data} type="video/mp4" />
                                            </video>
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <>
                                {Story}
                            </>
                        }
                    </div>
                }
            </div>
            <div className="box-menu" style={{ backgroundColor: "black", marginTop: '50px', textAlign: "center" }}>
                <>
                    <p className="correct font20" style={{ color: "khaki" }}>Cintai Diri Sendiri Sebelum Mencintai Orang Lain</p>
                    <p className="correct font20" style={{ color: "khaki" }}>Bahagiakan Diri Sendiri Sebelum Bahagiakan Orang Lain</p>
                </>
            </div>
            <div className="box-menu" style={{ backgroundColor: "white", marginTop: '50px', textAlign: "center" }} onClick={() => setOpenInvitation(true)}>
                {openInvitation === true ?
                    <p>Tgl 20 di tempat pertama kita bertemu</p>
                    :
                    <p className="correct font20" style={{ color: "black" }}>Invitation</p>
                }
            </div>
            <Footer />
        </div>
    )
}
export default Surprise;