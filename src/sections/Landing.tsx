import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Landing() {
    return (
        <div className="w-full h-screen overflow-hidden flex left-0 bg-bg-primary shrink-0">
            <div className="text-5xl mx-8 md:mx-16 lg:mx-32 mt-16 md:mt-0 font-primary-mono w-full flex flex-col md:flex-row md:text-left text-center items-center overflow-hidden">
                <div className="text-primary md:my-20 [&>a]:mr-4 md:mr-0 space-y-4 md:space-y-0">
                    <div>
                        <h1 className="md:text-9xl font-semibold fade-up data-visible:opacity-100 data-visible:translate-y-0">Hello!</h1>
                    </div>
                    <div>
                        <h1 className="md:text-9xl font-semibold fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-75">I am</h1>
                    </div>
                    <div>
                        <h1 className="md:text-9xl font-semibold fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-150">Carl Voller</h1>
                    </div>
                    <div>
                        <h3 className="md:text-3xl text-lg md:my-8 tracking-widest fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-300">I make pretty cool stuff</h3>
                    </div>
                    <a className="text-black!" href="https://www.linkedin.com/in/carl-ian-voller/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="text-black!"  href="https://github.com/carlvoller"><FontAwesomeIcon icon={faGithub} /></a>
                    <a className="text-black!"  href="mailto:hi@carl.md"><FontAwesomeIcon icon={faEnvelope} /></a>
                    {/* <div>
                        <h3 onClick={() => window.open("/Carl Voller CV.pdf", "blank")} className=" hover" style={{ fontSize: "20%", letterSpacing: 1.5, textDecoration: "underline" }}>Download my Resume</h3>
                    </div> */}
                </div>
                <div className="h-screen md:w-[30vw] w-full mb-[-50vw] md:mb-0 mx-auto bg-contain bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url(/assets/me.png)" }}>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}