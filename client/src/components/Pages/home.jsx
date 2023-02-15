import GetAllBhajans from "../bhajans/getAllBhajans";

const Home = () => {
    return (
        <>
            <div className="h-screen">
                {/* <div className="bg-blue-600 basis-1/4">
                Categories
              </div> */}
                <div className="h-full w-full px-5 pt-2">
                    <GetAllBhajans />
                </div>
            </div>
        </>
    );
};

export default Home;
