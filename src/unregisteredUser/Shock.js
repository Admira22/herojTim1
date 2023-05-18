import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "../registeredUser/Footer";
import sok from "../images/el_sok.jpg"
function Shock1() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">

                            <img src={sok} id="attack" alt="" style={{height: "350px", width: "350px"}}/>

                        </div>
                    </div>
                    <div className="col-md-6" style={{textAlign:"justify"}}>
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Električni udar prva pomoć: <span>SOS</span>

                                </h2>

                            </div>
                            <p >

                                Ako sumnjate da je neko doživio električni udar, morate
                                osigurati da su sve izvore napajanja isključene prije nego što pružite
                                prvu pomoć povrijeđenoj osobi. <div></div>
                                Postupak koji ćete poduzeti zavisi o tome da li je
                                rizik izazvan visokonaponskom ili niskonaponskom strujom.

                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function Shock2() {
    return (
        <section className="department_section layout_padding">
            <div className="department_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: 'center' }}>
                            Koraci koje treba poduzeti prilikom prve pomoći kod električnog udara:
                        </h2>
                        <hr/>
                        <div>

                            <br />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder'}}>
                                        Korak 1:
                                    </h5>
                                    <p>

                                        Osigurajte vlastitu sigurnost isključivanjem izvora električne energije, isključivanjem uređaja ili korištenjem nevodljivog objekta, poput drvene metle, kako biste udaljili osobu od izvora električne energije.
                                        <div></div>
                                        - Odmah pozovite hitne medicinske službe i prijavite incident. Ako je netko drugi u blizini, zamolite ih da pozovu dok vi pomažete žrtvi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 2:
                                    </h5>
                                    <p>
                                        - Ako je žrtva bez svijesti, provjerite puls i disanje.<div></div>
                                        - Započnite odmah s CPR-om ako žrtva ne diše.
                                        <div></div>
                                        - Ako je žrtva svjesna i ima bol, umirite je i pomognite joj da legne. Održavajte žrtvu toplom i udobnom.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">
                                <div className="detail-box">
                                    <h5  style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 3:
                                    </h5>
                                    <p>
                                        - Uklonite odjeću ili nakit koji je preusko ili se nalazi blizu područja ozljede.<div></div>
                                        - Provjerite postoje li opekotine, rezovi ili modrice blizu područja ozljede. <div></div>
                                        - Ako je moguće, podignite pogođeno područje.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 4:
                                    </h5>
                                    <p>
                                        - Ako se električni udar dogodio u vodi, poduzmite posebne mjere opreza i ne ulazite u vodu dok se ne smatra sigurnom. <div></div>
                                        - Kada hitne službe stignu, pružite im sve potrebne informacije, uključujući i sve prvu pomoć koja je pružena.

                                    </p>
                                </div>
                            </div>


                        </div>





                    </div>
                </div>
            </div>
        </section>

    );
}


function Shock() {
    return (
        <div>
            <Navbar/>
            <Shock1 />
            <Shock2 />
            <Footer/>
        </div>
    );
}

export default Shock;

