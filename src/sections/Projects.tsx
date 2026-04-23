import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const projects = [
    {
        date: "2026",
        name: "secure-enclave-rs",
        github: "https://github.com/carlvoller/secure-enclave-rs",
        short: "Rust & Python bindings to Apple's Secure Enclave",
        description: "I needed to sign hardware-backed client assertions on Apple Silicon, however could not find a way to do it outside of Swift / Objective-C. So I created secure-enclave-rs, bindings to the underlying Apple Security Framework to expose safe APIs for interacting with Apple's Secure Enclave.",
        skills: ["Rust", "Python", "PyO3", "Objective-C"]
    },
    {
        date: "2026",
        name: "snowflakedb-rs",
        github: "https://github.com/carlvoller/snowflakedb-rs",
        short: "Async-first Snowflake driver for Rust",
        description: "I needed an async compatible Rust/Snowflake library in order to build an ADBC adapter for a use-case in MetaLearner. So I built snowflakedb-rs to solve that need. The library was inspired by SQLx, and exposes helpers for many operations needed to build an ADBC adapter (such as query introspection, transactions, prepared statements, and Arrow Native responses)",
        skills: ["Rust", "Tokio/Smol", "Apache Arrow", "Snowflake"]
    },
    {
        date: "2025",
        name: "cuml_rfext",
        github: "https://github.com/carlvoller/cuml_rfext",
        short: "GPU-accelerated Recursive Feature Elimination",
        description: "A pybind11 C++ extension adding feature_importances_ to cuML Random Forests. This library enables scikit-learn-compatible RFE on GPU with over 100x speedup for large datasets. I noticed that CUML did not expose a feature_importances_ property on their RandomForestRegressor, so I decided to add support myself. Currently integrated into MetaLearner's distributed data pipelines by hooking directly into CUML's C++ Random Forests.",
        skills: ["C++", "pybind11", "CUDA", "Python", "NVIDIA RAPIDS (cuML)"]
    },
    {
        date: "2025",
        name: "Kanshi 監視",
        github: "https://github.com/carlvoller/kanshi",
        short: "Cross-platform filesystem events library",
        description: "A Rust library providing high-level abstractions over macOS FSEvents and Linux inotify/fanotify, exposed to Python via PyO3 and JavaScript via Neon/N-API. I also contributed safe fanotify bindings to the Rust Nix crate and identified + reported a macOS kernel bug in FSEvents callback flags with a Swift/Xcode proof-of-concept. I built this as I noticed current javascript file system listeners had very high memory usage",
        skills: ["Rust", "Fanotify Kernel API", "macOS FSEvents", "PyO3", "Neon/N-API", "Swift"]
    },
    {
        date: "2024",
        name: "excel-rs",
        github: "https://github.com/carlvoller/excel-rs",
        short: "High-performance XLSX exporter",
        description: "A Rust-based XLSX exporter achieving up to 45x speedup over Pandas and 12x faster than other Python tools, using stack buffers, pre-allocated vectors, and SIMD acceleration. Its exposed to Python via PyO3 for direct export from NumPy and Pandas arrays. Currently used in production at MetaLearner for pipelines with huge dataset export requirements.",
        skills: ["Rust", "PyO3", "NumPy", "XLSX", "CLI", "Pandas"]
    },
]


const delays = ["delay-75", "delay-150", "delay-300", "delay-500", "delay-700", "delay-1000"]

export default function Projects() {

    return (
        <div className="w-full overflow-hidden flex flex-col left-0 bg-bg-secondary shrink-0 ">
            <div className="md:mx-16 lg:mx-32 md:my-32 my-16 mx-8 flex flex-col text-primary">
                <div className="mb-12 w-full">
                    <h3 className="font-secondary md:text-2xl text-base tracking-widest uppercase text-secondary font-extralight">Projects</h3>
                    <h1 className="md:text-8xl text-4xl font-secondary font-extrabold tracking-wide font-primary">What I've built</h1>
                </div>
                <div className="flex flex-col divide-y-2 border-y-2 border-secondary/25 md:my-12 my-6">
                    {projects.map(({ date, name, short, github, description, skills }, idx) => (
                        <div className={`flex flex-col py-12 space-y-6 md:space-y-0 space-x-16 md:flex-row border-secondary/25 fade-up data-visible:opacity-100 data-visible:translate-y-0 ${delays[idx]}`}>
                            <div className="flex flex-col space-y-3 shrink-0 md:w-1/3 w-full">
                                <h3 className="font-secondary md:text-xl text-sm tracking-widest uppercase text-secondary font-extralight">{date}</h3>
                                <h3 className="font-secondary md:text-4xl text-2xl tracking-widest uppercase text-primary font-extrabold">{name}</h3>
                                <h3 className="font-secondary md:text-lg text-base tracking-widest uppercase text-secondary font-extralight"><a className="no-underline!" href={github}>Github <FontAwesomeIcon icon={faGithub} /></a></h3>
                            </div>
                            <div className="flex flex-col space-y-8 md:w-2/3 w-full">
                                <h1 className="md:text-2xl text-lg font-secondary font-semibold text-secondary tracking-wide font-primary">{short}</h1>
                                <p className="md:text-xl text-base tracking-widest text-primary/90">{description}</p>
                                <div className="flex space-x-2 space-y-2 flex-wrap">
                                    {skills.map((skill) => (
                                        <div className="border-secondary text-primary border rounded-3xl mb-2 px-4 py-1.5">
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}