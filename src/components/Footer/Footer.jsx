import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="relative z-0 bg-white pb-10 pt-20 dark:bg-dark lg:pb-10 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <Link href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <div className={`w-full flex gap-0 items-center`}>
                                        <Image src='/assets/images/logo_1.png' width={1000} height={1000} alt='logo' className='w-[4rem]' />
                                        {
                                            <h1 className={`flex-shrink-0 text-xl font-medium transition-all duration-300 text-black dark:text-white`}>EventElite</h1>
                                        }
                                    </div>
                                </Link>
                                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                                Discover seamless event management with our platform. From planning to execution, we make your events unforgettable.
                                </p>

                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="Event Planning" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Client Testimonials" />
                            <NavLink link="/#" label="Event Strategy" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About Us" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Our Achievements" />
                            <NavLink link="/#" label="Privacy Policy" />
                        </LinkGroup>
                        <LinkGroup header="Quick Links">
                            <NavLink link="/#" label="Book an Event" />
                            <NavLink link="/#" label="Our Packages" />
                            <NavLink link="/#" label="Meet the Team" />
                            <NavLink link="/#" label="Download Brochure" />
                        </LinkGroup>


                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                                    Follow Us On
                                </h4>
                                <div className="mb-6 flex items-center">
                                    <Link
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaFacebook />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaTwitter />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaYoutube />
                                    </Link>
                                    <Link
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <FaInstagram />
                                    </Link>
                                </div>
                                <p className="text-base text-body-color dark:text-dark-6">
                                    &copy; 2025 EventElite
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
            >
                {label}
            </Link>
        </li>
    );
};
