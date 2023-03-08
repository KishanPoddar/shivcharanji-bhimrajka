import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRequest } from "../../utils/requests";
import img from "../../Assets/logo.jpg"

const GetAllBhajans = () => {
    const [bhajans, setBhajans] = useState([]);
    let params = useParams();

    const getAllBhajans = async () => {
        const data = await getRequest((params && params.id ) ? `/bhajan/category/${params.id}` : `/bhajan/all`);
        if (data.success) {
            setBhajans(data.bhajans);
        } else {
            window.alert(data.message);
        }
    };

    useEffect(() => {
        getAllBhajans();
    }, [params?.id]);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 mb-5">
                {bhajans.map((bhajan, idx) => (
                    <Link key={idx} to={`/bhajan/${bhajan._id}`}>
                        <div className="lg:w-80 lg:h-80 w-72 h-72 bg-red-600 rounded-xl flex flex-col justify-center items-center">
                            {/* <p>{bhajan.image}</p> */}
                            <img src={img} alt="" className="h-5/6 w-full rounded-t-xl object-cover "/> {/* if we want to show the image from the top then use this property object-top*/}
                            <h1 className="h-1/6 flex justify-center items-center font-sans">{bhajan.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default GetAllBhajans;
