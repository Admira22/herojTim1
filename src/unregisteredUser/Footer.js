import QRCode from "qrcode.react";
import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 footer_col">
                        <div className="footer_contact">
                            <h4>
                                Kontaktiraj nas<span style={{color:"red", fontWeight:"bolder"}}>.</span>
                            </h4>
                            <div className="contact_link_box">
                                <a href="">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <div>
                                        <Location />
                                    </div>
                                </a>
                                <a href="">
                                    <FontAwesomeIcon icon={faMobileAlt} /> <br/>
                                    <span style={{ cursor: 'pointer', fontWeight:"bolder" }}>
                        Pozovi +387 (0)33 723 723
                </span>
                                </a> <br/> <br/>
                                <a href="">
                                    <FontAwesomeIcon icon={faEnvelope} /> <br/>
                                    <span style={{ cursor: 'pointer', fontWeight: "bolder" }}>
                  pmf@pmf.unsa.ba
                </span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 footer_col">
                        <div className="footer_detail">
                            <h4>
                                O nama<span style={{color:"red", fontWeight:"bolder"}}>.</span>
                            </h4>
                            <p>
                                Svakodnevne ozljede i hitne situacije mogu se dogoditi bilo kome.
                                Naša web stranica je posvećena prvoj pomoći i pruža korisne
                                informacije i savjete o tome kako pravilno reagirati u takvim
                                situacijama. Bez obzira jeste li početnik ili već imate određeno
                                iskustvo, naš cilj je osnažiti vas s potrebnim znanjima i vještinama
                                kako biste mogli brzo i sigurno pružiti pomoć. Pridružite nam se i
                                postanite dio promjene u spašavanju života!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mx-auto footer_col">
                       <h4> Scan me<span style={{color:"red", fontWeight:"bolder"}}>.</span></h4>
                        <div className="footer_link_box">

                            <div className="footer_links">
                                <QR/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 footer_col ">
                        <h4>
                           Korisni linkovi<span style={{color:"red", fontWeight:"bolder"}}>.</span>
                        </h4>
                        <a href="https://www.redcross.org/">Crveni križ</a> <br/>
                        <a href=" https://www.heart.org/">AHA</a> <br/>
                        <a href="https://www.mayoclinic.org/first-aid">Mayo Clinic</a> <br/>
                        <a href="https://www.nih.gov/">NIH</a> <br/>
                        <a href=" https://www.webmd.com/first-aid/">WebMD</a>

                    </div>
                </div>

                    <p>
                         <span style={{marginLeft:"45%", color:"brown", fontWeight:"bolder"}}> &copy; Heroj 2023</span>

                    </p>

            </div>


        </footer>
    );
}
function QR() {
    const url = 'http://192.168.1.29:3000';

    return (
        <div className="qr-container">
            <div className="qr-code">
                <QRCode value={url} />
            </div>
        </div>
    );
}
const Location = () => {
    const location = 'Prirodno-matematički fakultet, Zmaja od Bosne 33, Sarajevo, Bosna i Hercegovina';

    const openInMaps = () => {
        const encodedLocation = encodeURIComponent(location);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <div>
            <p onClick={openInMaps} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                {location}
            </p>
        </div>
    );
};

function Footer1(){
    return(
        <div>
            <Footer/>

        </div>
    )
}

export default Footer1;