
const awards = [
    {
        date: "2022",
        name: "Apple WWDC Scholarship",
        description: "I developed an iPad app using SwiftUI, CoreML, AVFoundation, NaturalLanguage, and Vision to encourage positive social interaction. The app was recognised for technical innovation and creativity."
    },
    {
        date: "2019",
        name: "SG:D TechBlazer Awards - 2nd Place Silver Award",
        description: "Recognised for CodeCollab, a collaborative coding platform with 73K+ registered users and 450K+ lifetime active users. It was recognised for highlighting innovation in computer science education and scalable platform design."
    }
]

const delays = ["delay-75", "delay-150", "delay-300", "delay-500", "delay-700", "delay-1000"]

export default function Awards() {

    return (<div className="w-full overflow-hidden flex left-0 bg-bg-primary shrink-0 ">
        <div className="md:mx-16 lg:mx-32 md:my-32 my-16 mx-8 flex flex-col text-primary">
            <div className="mb-12 w-full">
                <h3 className="font-secondary md:text-2xl text-base tracking-widest uppercase text-secondary font-extralight">Recognition</h3>
                <h1 className="md:text-8xl text-4xl font-secondary font-extrabold tracking-wide font-primary">Awards</h1>
            </div>
            <div className="text-2xl font-primary space-y-8">
                {awards.map(({ date, name, description }, idx) => (
                    <div className={`flex flex-col md:py-12 py-6 space-y-6 md:space-y-0 space-x-16 md:flex-row border-secondary/25 fade-up data-visible:opacity-100 data-visible:translate-y-0 ${delays[idx]} bg-black`}>
                        <div className="flex flex-col space-y-3 shrink-0 w-full md:px-12 px-6">
                            <h3 className="font-secondary md:text-xl text-sm tracking-widest uppercase text-secondary font-extralight">{date}</h3>
                            <h3 className="font-secondary md:text-4xl text-2xl tracking-widest uppercase text-white font-extrabold">{name}</h3>
                            <p className="md:text-xl text-base tracking-widest text-white/90">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}