import * as React from "react";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import slider1 from "../assets/slider-1.png";
import slider2 from "../assets/slider-2.png";
import slider3 from "../assets/slider-3.png";
import adds1 from "../assets/slider-area-add1.png";
import adds2 from "../assets/slider-area-add2.png";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
    slider1,
  },
  {
    label: "Bird",
    imgPath:
    slider2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: slider3,
  }];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={'slider-area'}>
      <Box  className={'slider'}  sx={{maxWidth: 1200  , flexGrow: 1}}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          {/*<Typography>{images[activeStep].label}</Typography>*/}
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: '220px',
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        {/*
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? <FaAngleLeft/> : <FaAngleRight/>}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <FaAngleRight/> : <FaAngleLeft/>}

          </Button>
        }
      />
*/}

      </Box>
      <div className="adds">
        <img src={adds1} alt=""/>
        <img src={adds2} alt=""/>
      </div>
    </div>

  );
}

export default SwipeableTextMobileStepper;
