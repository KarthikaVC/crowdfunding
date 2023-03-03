import { useState } from "react";
import React from "react";
import axios from "axios";

function ContactPage(){
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
        });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
        };
        const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/f/xgeqzppe",
            data: new FormData(form)
        })
            .then(r => {
            handleServerResponse(true, "Thanks for submitting!", form);
            })
            .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
            });
        };

return (
    <div  className="container">
            <h2>For any queries</h2>
            <h4 className="class-title">Email:example@graded.com</h4>
            <h4 className="class-title">Contact No:+61 1010101010</h4>

        <form onSubmit={handleOnSubmit} className="form-contact-class">
        <h3 class-title>CONTACT US</h3>
        <label htmlFor="name"></label>
            <input id="name" type="name" name="name" placeholder="Your Name here" required />
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="Your email here"required />
            <label htmlFor="message"></label>
            <textarea id="message" name="message" placeholder="Message here"></textarea>
            <button type="submit" disabled={serverState.submitting}>Submit</button>
            {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
            </p>
            )}
        </form>
    </div>
);

}
export default ContactPage;