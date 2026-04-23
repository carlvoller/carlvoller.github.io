
export default function AboutMe() {
    return (<div className="w-full overflow-hidden flex left-0 bg-bg-secondary shrink-0 ">
        <div className="md:mx-16 lg:mx-32 mx-8 md:my-32 my-16 flex flex-col text-primary text-left">
            <div className="mb-12 w-full">
                <h3 className="font-secondary md:text-2xl text-base tracking-widest uppercase text-secondary font-extralight">About</h3>
                <h1 className="md:text-8xl text-4xl font-secondary font-extrabold tracking-wide font-primary">Who I Am</h1>
            </div>
            <div className="md:text-2xl text-base font-primary space-y-8 w-full">
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0">Hi! I'm Carl, a <b>Platforms Infrastructure and Security Engineer</b> based in Singapore 🇸🇬.</p>
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-75">I've spent most of my career working across <b>cloud architecture</b>, <b>DevSecOps</b>, and <b>systems programming</b>. I build and secure the foundation that engineering teams <i>rely</i> on.</p>
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-150">I specialize in designing and implementing internal platforms, CI/CD systems, and developer tooling. Much of my work involves <b>making incompatible systems work together</b>. This often involves building custom tooling or extending existing workflows to fit whatever real-world constraints I'm presented with.</p>
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-300">I don't believe in accepting limitations at face value. <b>If something isn't possible today, I'll find a way to make it work.</b> Whether that means rethinking architecture or building something new from scratch. It's not uncommon for me to spend weekends turning <i>"impossible"</i> product requirements into working systems.</p>
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-500">I also care deeply about security, honestly maybe a little too much sometimes. I always design my systems with strong secure defaults and minimize trust boundaries. I treat misconfigurations as failures in engineering and a worrying lack of adequate controls.</p>
                <p className="fade-up data-visible:opacity-100 data-visible:translate-y-0 delay-700">Outside of my professional career, I'm obsessed with using Rust 🦀. Genuinely wish I could use the language more.</p>
            </div>
        </div>
    </div>)
}