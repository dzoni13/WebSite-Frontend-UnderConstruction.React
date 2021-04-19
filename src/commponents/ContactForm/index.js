import React from "react";
import "./index.css";

const loc =
    "https://maps.google.com/maps?q=500%20Terry%20Francois%20Street%20San%20Francisco,%20CA%2094158&t=&z=13&ie=UTF8&iwloc=&output=embed";

function Contact() {
    return (
        <div className="main-contact">
            <div className="container-grid">
                <div className="contact-text">
                    <h2>Contact</h2>
                    <p>500 Terry Francois Street San Francisco, CA 94158</p>
                    <p>someone@email.com</p>
                    <p>123-456-7890</p>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Name" required></input>
                        <input type="text" placeholder="Email" required></input>
                        <br></br>

                        <input type="text" placeholder="Phone"></input>
                        <input type="text" placeholder="Address" required></input>
                        <br></br>
                        <input
                            type="text"
                            placeholder="Subject"
                            id="sub-input"
                            required
                        ></input>
                        <br></br>
                        <textarea
                            type="text"
                            placeholder="Type your message here"
                            id="msg-input"
                            required
                        ></textarea>
                        <br></br>
                        <input type="submit" id="submit-input"></input>
                    </form>
                </div>
            </div>

            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        title="iframe"
                        width="100%"
                        height="500"
                        id="gmap_canvas"
                        src={loc}
                        frameBorder="0"
                        scrolling="no"
                        marginHeight=""
                        marginWidth="0"
                    ></iframe>
                    <a href="https://embedgooglemap.net/maps/75">.</a>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default Contact;
