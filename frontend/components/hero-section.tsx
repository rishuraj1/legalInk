import Form from "next/form";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-900 text-white py-16 px-6 w-full rounded-md">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to <span>LegalInk</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Discover amazing articles, share your thoughts, and grow your knowledge.
                </p>
                {/* <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Search articles or topics"
                        className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                    >
                        Search
                    </button>
                </form> */}
                <Form
                    action={"/"}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <input
                        name="query"
                        type="text"
                        placeholder="Search articles or topics"
                        className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                    >
                        Search
                    </button>
                </Form>
            </div>
        </section>
    );
}
