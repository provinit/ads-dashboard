import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SuccessPopup from "../components/ads/SuccessPopup";
import { useNavigate } from "react-router-dom";
import { useAdContext } from "../context/AdContext";
const MediaAdForm = () => {
  const { isCheckedText, isCheckedMedia } = useAdContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading1: "",
    heading2: "",
    description: "",
    landscape: "",
    potrait: "",
    square: "",
    videourl: "",
    businessname: "",
    buttonlabel: "option0",
    websiteurl: "",
  });

  const [successPopupOpen, setSuccessPopupOpen] = useState(false);

  const handleSuccessButtonClick = () => {
    setSuccessPopupOpen(true);
  };

  const handleSuccessPopupClose = () => {
    setSuccessPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate("/create-ad");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuccessButtonClick();
    setTimeout(() => {
      navigate("/create-ad");
    }, 600);
    // console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-[5%] w-[90%] xl:w-[98%] 2xl:w-full xl:mx-auto border bg-white m-[20px] p-[15px] pb-[100px]">
      {isCheckedText ? (
        <p className="text-lg font-medium mb-[20px]"> Create Text Ad </p>
      ) : (
        <p className="text-lg font-medium mb-[20px]"> Create Media Ad </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid xl:grid-cols-2 xl:gap-[40px]">
          <div className="space-y-[10px]">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="heading1">Heading 01</label>
              <TextField
                id="heading1"
                name="heading1"
                value={formData.heading1}
                onChange={handleChange}
                placeholder="Add a heading that would make users interested"
                sx={{
                  marginTop: "5px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "14px",
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="heading2" className="mt-[10px] xl:mt-0">
                Heading 02
              </label>
              <TextField
                id="heading2"
                name="heading2"
                value={formData.heading2}
                onChange={handleChange}
                placeholder="Add a heading that would make users interested"
                sx={{
                  marginTop: "5px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "14px",
                  },
                }}
              />
            </Box>
          </div>
          <div>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="description" className="mt-[20px] xl:mt-0">
                Description 01
              </label>
              <TextField
                id="description"
                name="description"
                multiline
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Add primary text to help users understand more about your products services or offers"
                sx={{
                  marginTop: "5px",
                  "@media screen and (max-width: 600px)": {
                    fontSize: "14px",
                  },
                }}
              />
            </Box>
          </div>
        </div>
        {isCheckedMedia && !isCheckedText ? (
          <>
            <div className="grid xl:grid-cols-3 xl:gap-[30px] mt-[20px]">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="landscape-image">
                  Landscape Marketing Image (1.9:1)
                </label>
                <TextField
                  id="landscape-image"
                  name="landscape-image"
                  value={formData.landscape}
                  onChange={handleChange}
                  placeholder="Add the URL of the image you want to use for the ad"
                  sx={{
                    marginTop: "5px",
                    "@media screen and (max-width: 600px)": {
                      fontSize: "14px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="potrait-image" className="mt-[20px] xl:mt-0">
                  Potrait Marketing Image (4:5)
                </label>
                <TextField
                  id="potrait-image"
                  name="potrait-image"
                  value={formData.potrait}
                  onChange={handleChange}
                  placeholder="Add the URL of the image you want to use for the ad"
                  sx={{
                    marginTop: "5px",
                    "@media screen and (max-width: 600px)": {
                      fontSize: "14px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="square-image" className="mt-[20px] xl:mt-0">
                  Square Marketing Image (4:5)
                </label>
                <TextField
                  id="square-image"
                  name="square-image"
                  value={formData.square}
                  onChange={handleChange}
                  placeholder="Add the URL of the image you want to use for the ad"
                  sx={{
                    marginTop: "5px",
                    "@media screen and (max-width: 600px)": {
                      fontSize: "14px",
                    },
                  }}
                />
              </Box>
            </div>

            <div className="mt-[10px]">
              {" "}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="videourl" className="mt-[10px] xl:mt-0">
                  Video URL
                </label>
                <TextField
                  id="videourl"
                  name="videourl"
                  value={formData.videourl}
                  onChange={handleChange}
                  placeholder="Add the URL of the image you want to use for the ad"
                  sx={{
                    marginTop: "5px",
                    "@media screen and (max-width: 600px)": {
                      fontSize: "14px",
                    },
                  }}
                />
              </Box>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="mt-[10px] grid xl:grid-cols-2 xl:gap-[30px]">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="businessname" className="mt-[10px] xl:mt-0">
              Business Name
            </label>
            <TextField
              id="businessname"
              name="businessname"
              value={formData.businessname}
              onChange={handleChange}
              placeholder="Add your business name"
              sx={{ marginTop: "5px" }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="buttonlabel" className="mt-[20px] xl:mt-0">
              Button Label
            </label>
            <Select
              id="buttonlabel"
              name="buttonlabel"
              value={formData.buttonlabel}
              onChange={handleChange}
              sx={{
                color:
                  formData.buttonlabel !== "option0" ? "inherit" : "#A9A9A9",

                marginTop: "5px",
                "@media screen and (max-width: 600px)": {
                  fontSize: "14px",
                },
              }}
            >
              <MenuItem value="option0" disabled>
                Select a label that best suits your ad
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </Box>
        </div>

        <div className="mt-[10px]">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="websiteurl" className="mt-[10px] xl:mt-0">
              Website URL
            </label>
            <TextField
              id="websiteurl"
              name="websiteurl"
              value={formData.websiteurl}
              onChange={handleChange}
              placeholder="Add the URL of the landing page you want to redirect users to"
              sx={{
                marginTop: "5px",
                "@media screen and (max-width: 600px)": {
                  fontSize: "14px",
                },
              }}
            />
          </Box>
        </div>

        <div className="flex flex-col md:flex-row pt-[20px]  md:space-x-[20px] xl:float-right">
          <button
            className="border text-sm bg-[#FAFAFA] text-black font-semibold rounded  py-[10px] px-[50px] my-[10px]"
            onClick={handleBackButton}
          >
            Back
          </button>
          <button
            className="bg-[#0096FF] text-sm text-white font-semibold rounded  py-[10px] px-[50px] md:my-[10px]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <SuccessPopup open={successPopupOpen} onClose={handleSuccessPopupClose} />
    </div>
  );
};

export default MediaAdForm;
