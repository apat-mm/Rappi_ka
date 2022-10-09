import React from "react"
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands'
import { faTwitter } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";

const Footer = () => <footer className="page-footer font-small blue pt-2">

    <div className="footer-copyright text-center py-4">© 2022 Copyright
        <a href="https://mdbootstrap.com/"></a>
        <FontAwesomeIcon
            icon={faTwitter}
            transform="right-15"
        />
        <FontAwesomeIcon
            icon={faInstagram}
            transform="right-25"
        />
        <FontAwesomeIcon
            icon={faFacebook}
            transform="right-35"
        />
    </div>

</footer>

export default Footer