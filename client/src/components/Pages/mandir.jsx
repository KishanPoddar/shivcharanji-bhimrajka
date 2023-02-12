const Mandir = () => {
    return (
        <>
            <div className="w-11/12 mx-auto flex flex-col gap-4 mt-7">
                <div className="h-[70vh]">
                    <iframe title="This is the map to reach Khatu Mandir"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.7490195920522!2d75.403317!3d27.364369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fd00b23858e7dfd!2sKhatu%20Shyam%20Ji%20Sikar!5e0!3m2!1sen!2sin!4v1649187262937!5m2!1sen!2sin"
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div>
                    <a
                        className="w-full h-[6vh] flex justify-center items-center bg-blue-500 sm:text-2xl text-lg text-white"
                        href="https://goo.gl/maps/XtxHbcP64opNNqUN8"
                        target="_blank" rel="noreferrer"
                    >
                        Get Directions
                        </a>
                </div>
            </div>
        </>
    );
};

export default Mandir;
