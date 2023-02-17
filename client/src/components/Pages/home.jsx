import GetAllBhajans from "../bhajans/getAllBhajans";
import GetBhajanByCategory from "../bhajans/getBhajanByCategory";

const Home = () => {
    return (
        <>
            <div className="h-screen flex mt-7">
                <div className="h-[50rem] 2xl:ml-20 medium:ml-16 ml-14 mt-3 w-96">
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
