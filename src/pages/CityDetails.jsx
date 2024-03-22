import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCityById } from "../services/citiesQueries";


const CityDetails = () => {

    const params = useParams();
    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();



    useEffect(() => {
        getCityById(params.id)
            .then((res) => {
                if (res._id) {
                    setCity(res);
                    console.log(res)
                } else {
                    alert("City not available.");
                    navigate("/Cities");
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className="relative">
            <img
                src={city.image}
                alt=""
                sizes="200vw"
                className="absolute z-0 w-[100%] object-cover h-[100%]"
            />
            <div className="relative z-10 flex flex-col gap-[50px]">
                <div className="flex pl-[24px] pr-[24px] pb-[200px] rounded-[16px] pt-[30px]">
                    <Link
                        to={"/cities/"}
                        className="text-20px bg-opacity-70% font-bold bg-[#2d2d38] pr-[15px] pl-[15px] pt-[10px] pb-[10px] rounded-[12px] hover:bg-white"
                    >
                        Return to Cities
                    </Link>
                </div>
                <section className="flex justify-center items-center flex-col pb-[140px]">
                    <div className="bg-opacity-70% bg-[#2d2d38] rounded-[12px] pt-[20px] pl-[30px] pr-[30px] pb-[19px]">
                        <div className="flex flex-col">
                            <h1 className="text-48px font-bold text-white">
                                {city.name}
                            </h1>
                        </div>
                    </div>
                </section>
                {/* city data */}
                <section className="bg-opacity-80% flex flex-col bg-[#2f2f3d] pt-[35px] pb-[35px] items-center justify-center gap-[30px] bg-opacity-[90%]">
                    <div className="max-w-1280px pr-32px pl-32px flex flex-col ml-auto mr-auto items-center gap-[30px]">
                        <div className="flex flex-col items-center gap-[30px]">
                            <h3 className="text-30px font-bold border-2 bg-white rounded-[8px]">
                                {city.country}
                            </h3>
                            <h3 className="text-30px font-bold bg-white border-2 rounded-[8px]">
                                {city.language}
                            </h3>
                            <h3 className="text-30px font-bold bg-white border-2 rounded-[8px]">
                                {city.currency}
                            </h3>
                            <h3 className="text-30px font-bold bg-white border-2 rounded-[8px]">
                                {city.description}
                            </h3>
                        </div>
                    </div>
                </section>
                {/* itineraries */}
                <section className="bg-opacity-80% flex flex-col bg-[#2f2f3d] pt-[35px] pb-[35px] items-center justify-center gap-[30px] bg-opacity-[90%]">
                <div className="max-w-1280px pr-32px pl-32px flex flex-col ml-auto mr-auto items-center gap-[30px]">
                    <div className="flex flex-col items-center gap-[30px]">
                        <h3 className="text-2xl font-bold">Itineraries</h3>
                        {/* Map */}
                        {city.itineraries.map((itinerary, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg">
                                <h4 className="text-lg font-semibold">{itinerary.title}</h4>
                                <p className="text-gray-600">{itinerary.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default CityDetails;
