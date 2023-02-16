import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/requests";
import img from "../../Assets/Hanuman-Ji-Aarti.jpg";
import { HiOutlineDownload } from 'react-icons/hi';

const GetOneBhajan = () => {
    const { id } = useParams();
    const [bhajan, setBhajan] = useState(null);
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState(false);

    const getAllBhajans = async () => {
        const data = await getRequest(`/bhajan/${id}`);
        // console.log(data);
        if (data.success) {
            setError(false);
            setBhajan(data.bhajan);
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        getAllBhajans();
    });

    return (
        <>
             {error ? (
                <div>Show error page</div>
            ) : bhajan ? (
                <div className="back before:bg-teal-200">
                    <div className="flex xl:flex-row flex-col items-center xl:items-start xl:px-10 px-1 py-6">
                        <div onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} className="xl:w-[50rem] flex justify-end mt-4">
                            <img
                                src={img} //{bhajan.image}
                                alt=""
                                className="w-full h-[50rem] rounded-3xl xl:pl-10 p-4 relative left-8"
                            />
                            <a href={img} download className={`relative right-8 top-7 ${visible?"lg:visible":"lg:invisible"} visible `}>
                                <HiOutlineDownload className="h-10 w-10 p-1 text-white bg-lightblack rounded-xl" />
                            </a>
                        </div>

                        <div className="w-full">
                            <div className="flex justify-center">
                                <div className="flex flex-col items-center xl:mt-4 mt-24 mb-7">
                                    <h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold sm:font-normal">{bhajan.title}</h1>
                                    <p className="text-base font-semibold sm:font-normal">( {bhajan.tarj} ) </p>
                                    <p className="sm:text-2xl xs:text-xl text-lg mt-7 ">{bhajan.doha}</p>
                                    <br />
                                    {bhajan?.lyrics?.map((lyrics, idx) => (
                                        <li key={idx} className="list-none sm:text-2xl xs:text-xl text-lg !leading-10" >{lyrics?lyrics:<br/>}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Show loading page</div>
            )}
        </>
    );
};

export default GetOneBhajan;
