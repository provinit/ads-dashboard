import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useAdContext } from "../context/AdContext";

const CreateAd = () => {

  const{ isCheckedText, isCheckedMedia, handleChangeText, handleChangeMedia} = useAdContext();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ad-form");
  };

  return (
    <div className="container mx-[5%] w-[90%] xl:w-[98%] 2xl:w-full xl:mx-auto border bg-white m-[20px] p-[15px] pb-[50px]">
      <p>Create Ads</p>
      <div className="mx-auto w-[fit-content] py-[50px]">
        <div className="flex space-x-[20px] md:space-x-[50px]">
          <div className="shadow-md w-[fit-content] ">
            <div className="bg-white pt-[20px] px-[30px]">
              <Checkbox
                sx={{
                  marginLeft: "-20px",
                }}
                value="text-ad"
                checked={isCheckedText}
                onChange={handleChangeText}
              />
              <img
                src="/assets/textad.png"
                alt="text ad"
                className="w-[250px]"
              />
            </div>

            <div className="bg-[#FAFAFA] text-center pt-[10px] pb-[20px]">
              <p className="text-gray-400 text-sm">Create</p>
              <p className="font-bold text-lg">Text Ad</p>
            </div>
          </div>

          <div className="shadow-md w-[fit-content] ">
            <div className="bg-white pt-[20px] px-[30px]">
              <Checkbox
                sx={{
                  marginLeft: "-20px",
                }}
                value="media-ad"
                checked={isCheckedMedia}
                onChange={handleChangeMedia}
              />
              <img
                src="/assets/mediaad.png"
                alt="media ad"
                className="w-[250px]"
              />
            </div>

            <div className="bg-[#FAFAFA] text-center pt-[10px] pb-[20px]">
              <p className="text-gray-400 text-sm">Create</p>
              <p className="font-bold text-lg">Media Ad</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-[#0096FF] text-white rounded text-sm py-[5px] px-[50px] float-right"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default CreateAd;
