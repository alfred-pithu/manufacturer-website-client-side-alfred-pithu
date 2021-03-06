import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-10 mb-5 p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Products</span>
                <a className="link link-hover">GPU</a>
                <a className="link link-hover">HDD</a>
                <a className="link link-hover">SSD</a>
                <a className="link link-hover">UPS</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;