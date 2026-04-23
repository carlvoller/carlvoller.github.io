
const experience = [
    {
        date: "2024 - Present",
        company: "MetaLearner Ptd Ltd",
        title: "Platforms Engineer (Infrastructure & Security)",
        description: "I'm the Sole infrastructure and security engineer at a 10-person B2B AI startup. I led the company's ISO 27001 implementation from scratch, designed our zero-trust identity platform, architected custom Golang services for PII handling, and built a secure Arrow FlightSQL gateway with Firecracker microVM isolation per customer connection. Finally, I manage our 18 or so services at under $,500/month.",
        skills: ["Rust", "Go", "Python", "Kubernetes", "Firecracker", "GCP", "AWS", "Terraform", "OpenTelemetry"]
    },
    {
        date: "2024 - 2026",
        company: "Republic of Singapore Air Force",
        title: "DevSecOps Engineer",
        description: "I was a DevSecOps Engineer responsible for meeting with research teams in the Singapore Air Force and translating their POCs into fully deployed and operational services across the military. This mostly involved archtecting AWS infrastructure around their requirements, setting up CI pipelines, and setting up telemetry services for day 2 operations. The various projects I've deployed included SageMaker ML Pipelines, AWS Greengrass IOT Core on Raspberry PIs, and air-gapped isolated DevSecOps environments for higher privileged requirements across the military.",
        skills: ["AWS", "SageMaker", "Greengrass", "GitLab CI", "Rust", "IoT"]
    },
    {
        date: "2023 - 2024",
        company: "Government Technology Agency of Singapore",
        title: "Cyber Security Engineer - Intern",
        description: "As an intern, I build a Kubernetes Security Training platform used across various Singapore Government Agencies. The platform involved Firecracker microVM orchestration to spin up isolated training environments with minikube to support training scenarios in under 5 seconds. I also deployed offensive security tools on AWS ECS and Lambda for automated penetration testing, reducing infrastructure cost from ~$500/month to $1.50 per scan.",
        skills: ["Rust", "Go", "Python", "Kubernetes", "Firecracker", "AWS ECS/Lambda", "React", "TypeScript"]
    },
    {
        date: "2017 - 2023",
        company: "CodeCollab Pte Ltd",
        title: "Founder & Lead Developer",
        description: "As a teenager, I founded and built a collaborative coding platform. CodeCollab was a Google Docs but for Code, allowing users to pair program and test code in real time. I grew the platform to 73K registered users, 450K lifetime users and 26K monthly active users at its peak. I sustained the business on pocket money through extreme cost optimisation before securing a commerical partnership with OpenLearning (Australia). I built the platform, including the frontend code editor, open sourced a ShareDB / Monaco Editor connector, the backend APIs, and the Firecracker microVM compilation engine. The compilation engine supported 26+ language, including niche ones like Python Turtle and RacketLang.",
        skills: ["NodeJS", "Go", "Firecracker", "Terraform", "GCP", "NextJS", "Redux"]
    }
]

const delays = ["delay-75", "delay-150", "delay-300", "delay-500", "delay-700", "delay-1000"]

export default function Experience() {
    return (
        <div className="w-full overflow-hidden flex flex-col left-0 bg-bg-primary shrink-0 ">
            <div className="md:mx-16 lg:mx-32 md:my-32 my-16 mx-8 flex flex-col text-primary">
                <div className="mb-12 w-full">
                    <h3 className="font-secondary md:text-2xl text-base tracking-widest uppercase text-secondary font-extralight">Experience</h3>
                    <h1 className="md:text-8xl text-4xl font-secondary font-extrabold tracking-wide font-primary">Where I've worked</h1>
                </div>
                <div className="flex flex-col divide-y-2 border-y-2 border-secondary/25 md:my-12 my-4">
                    {experience.map(({ date, company, title, description, skills }, idx) => (
                        <div className={`flex flex-col md:py-12 py-6 space-y-6 md:space-y-0 space-x-16 md:flex-row border-secondary/25 fade-up data-visible:opacity-100 data-visible:translate-y-0 ${delays[idx]}`}>
                            <div className="flex flex-col shrink-0 md:w-1/4 w-full">
                                <h3 className="font-secondary md:text-xl text-sm tracking-widest uppercase text-secondary font-extralight">{date}</h3>
                                <h3 className="font-secondary md:text-xl text-base tracking-widest uppercase text-secondary font-semibold">{company}</h3>
                            </div>
                            <div className="flex flex-col space-y-8 md:w-3/4 w-full">
                                <h1 className="md:text-4xl text-2xl font-secondary font-extrabold tracking-wide font-primary">{title}</h1>
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