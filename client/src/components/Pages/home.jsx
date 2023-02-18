import GetAllBhajans from "../bhajans/getAllBhajans";
import GetBhajanByCategory from "../bhajans/getBhajanByCategory";

const Home = () => {
    return (
        <>
            <div className=" flex lg:flex-row flex-col lg:mt-7 mt-0">
                <div className=" 2xl:ml-20 medium:ml-16 mt-3 lg:w-96 w-3/4 m-auto lg:m-0 ">
                    <GetBhajanByCategory />
                </div>
                <div className="h-full w-full px-5 ">
                    <GetAllBhajans />
                </div>
            </div>
        </>
    );
};

export default Home;