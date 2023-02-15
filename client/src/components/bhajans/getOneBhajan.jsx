import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/requests";
import img from "../../Assets/Hanuman-Ji-Aarti.jpg";

const GetOneBhajan = () => {
    const { id } = useParams();
    const [bhajan, setBhajan] = useState(null);
    const [error, setError] = useState(false);

    const getAllBhajans = async () => {
        const data = await getRequest(`/bhajan/${id}`);
        console.log(data);
        if (data.success) {
            setError(false);
            setBhajan(data.bhajan);
        } else {
            setError(true);
        }
    };

    useEffect(() => {
        getAllBhajans();
    }, []);

    return (
        <>
            {/* {error ? (
                <div>Show error page</div>
            ) : bhajan ? (
                <div>
                    <div>
                        <h1>{bhajan.title}</h1>
                        <p>{bhajan.tarj}</p>
                        <p>{bhajan.doha}</p>
                        <p>{bhajan.image}</p>
                        {bhajan?.lyrics?.map((lyrics, idx) => (
                            <li key={idx}>{lyrics}</li>
                        ))}
                    </div>
                </div>
            ) : (
                <div>Show loading page</div>
            )} */}

             {bhajan ? (
                <div className=" bg-lime-200 h-[194vh] flex xl:flex-row flex-col items-center xl:items-start xl:px-10 px-1 py-6">
                    <div className="xl:w-[50rem] flex justify-end mt-4">
                        <img
                            src={img} //{bhajan.image}
                            alt=""
                            className="w-full h-[50rem] rounded-3xl xl:pl-10 p-4 "
                        />
                    </div>

                    <div className="w-full">
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center xl:mt-4 my-24">
                                <h1 className="md:text-5xl text-3xl font-bold md:font-normal">{bhajan.title}</h1>
                                <p className="text-base font-semibold md:font-normal">( {bhajan.tarj} ) </p>
                                <p className="md:text-2xl text-lg font-semibold md:font-normal mt-7 ">{bhajan.doha}</p>
                                <br />
                                {bhajan?.lyrics?.map((lyrics, idx) => (
                                    <li key={idx} className="list-none md:text-2xl text-lg font-semibold md:font-normal !leading-10" >{lyrics?lyrics:<br/>}</li>
                                ))}
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
