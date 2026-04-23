

export default function Footer() {
    return (
        <div className="w-full overflow-hidden flex left-0 bg-bg-primary border-t border-secondary py-12 text-primary shrink-0">
            <div className="md:mx-16 lg:mx-32 mx-8 flex items-center w-full">
                <h1 className="font-primary text-3xl font-bold">Carl Voller</h1>
                <div className="ml-auto flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 items-end md:items-center [&_a]:no-underline!">
                    <a href="https://www.linkedin.com/in/carl-ian-voller/">LINKEDIN</a>
                    <a href="https://github.com/carlvoller">GITHUB</a>
                    <a href="mailto:hi@carl.md">HI@CARL.MD</a>
                </div>
            </div>
        </div>
    )
}