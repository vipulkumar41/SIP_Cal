import * as React from "react";
import "./sip.css";
import { useNavigate } from 'react-router-dom';
import Result from './result'
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

// Second Page

// Input Boxes for Sliders
const Input = styled(MuiInput)`
  width: 80px; border:solid 1px; Right: 210px; Bottom:15px 
`;
const Input2 = styled(MuiInput)`
  width: 80px; border:solid 1px; Right: -18px; Bottom:206px 
`;
const Input3 = styled(MuiInput)`
  width: 80px; border:solid 1px; Right: -18px; Bottom:170px 
`;
const Input4 = styled(MuiInput)`
  width: 80px; border:solid 1px; Right: -18px; Bottom:137px 
`;
 function Sip() {
  const [final, setFinal]=useState("");
  const[graph,setGraph]=useState([]);
  
//Slider1
const [investment, setInvestment] = React.useState("5000");
  const handleSliderChange = (event, newInvestment) => {
    setInvestment(newInvestment);
  };
  const handleInputChange = (event) => {
    setInvestment(event.target.investment === "" ? "" : Number(event.target.investment));
  };
  const handleBlur = () => {
    if (investment < 500) {
      setInvestment(500);
    } else if (investment > 1000000) {
      setInvestment(1000000);
    }
  };
  const saving = [
    {
      value: 5000,
      label: "5K"
    },
    {
      value: 100000,
      label: "100K"
    },
    {
      value: 200000,
      label: "200K"
    },
    {
      value: 300000,
      label: "300K"
    },
    {
      value: 400000,
      label: "400K"
    },
    {
      value: 500000,
      label: "500K"
    },
    {
      value: 600000,
      label: "600K"
    },
    {
      value: 700000,
      label: "700K"
    },
    {
      value: 800000,
      label: "800K"
    },
    {
      value: 900000,
      label: "900K"
    },
    {
      value: 1000000,
      label: "1M"
    }
  ];
  //Slider2
  const [period, setPeriod] = React.useState(5);
  const handleSliderChangee = (event, newValue) => {
    setPeriod(newValue);
  };
  const handleInputChangee = (event) => {
    setPeriod(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlurr = () => {
    if (period < 1) {
      setPeriod();
    } else if (period > 50) {
      setPeriod(50);
    }
  };
  const years = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 5,
      label: "5"
    },
    {
      value: 10,
      label: "10"
    },
    {
      value: 15,
      label: "15"
    },
    {
      value: 20,
      label: "20"
    },
    {
      value: 25,
      label: "25"
    },
    {
      value: 30,
      label: "30"
    },
    {
      value: 35,
      label: "35"
    },
    {
      value: 40,
      label: "40"
    },
    {
      value: 45,
      label: "45"
    },
    {
      value: 50,
      label: "50"
    }
  ];
  //Slider3
  const [returnRate, setReturnRate] = React.useState(5);
  const handleSliderChangeee = (event, newValue) => {
    setReturnRate(newValue);
  };
  const handleInputChangeee = (event) => {
    setReturnRate(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlurrr = () => {
    if (returnRate <0) {
      setReturnRate(0);
    } else if (returnRate >30) {
      setReturnRate(30);
    }
  };
  const rreturn = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 3,
      label: "3"
    },
    {
      value: 6,
      label: "6"
    },
    {
      value: 9,
      label: "9"
    },
    {
      value: 12,
      label: "12"
    },
    {
      value: 15,
      label: "15"
    },
    {
      value: 18,
      label: "18"
    },
    {
      value: 21,
      label: "21"
    },
    {
      value: 24,
      label: "24"
    },
    {
      value: 27,
      label: "27"
    },
    {
      value: 30,
      label: "30"
    }
  ];
  //Sider4
  const [inflation, setInflation] = React.useState(4.5);
  const handleSliderChangeeee = (event, newValue) => {
    setInflation(newValue);
  };
  const handleInputChangeeee = (event) => {
    setInflation(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlurrrr = () => {
    if (inflation <0) {
      setInflation(0);
    } else if (inflation >15) {
      setInflation(15);
    }
  };
  const irate = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 1.5,
      label: "1.5"
    },
    {
      value: 3,
      label: "3"
    },
    {
      value: 4.5,
      label: "4.5"
    },
    {
      value: 6,
      label: "6"
    },
    {
      value: 7.5,
      label: "15"
    },
    {
      value: 9,
      label: "9"
    },
    {
      value: 10.5,
      label: "10.5"
    },
    {
      value: 12,
      label: "12"
    },
    {
      value: 13.5,
      label: "13.5"
    },
    {
      value: 15,
      label: "15"
    }
  ];

  // API Fetching and Conditional Rendering
    const [isSlider, setIsSlider] = useState(true);
    async function changeState() {
    const response = await fetch("http://localhost:5000/sipCalculator",{method:"POST",headers:{
      "Content-type": "application/json",
    },body:JSON.stringify({
      period:period,
      rate:returnRate,
      monInvest:investment,
      inflationRate:inflation
    })})
    const data = await response.json();
    setFinal(data.return)
    setGraph(data.graph)
    setIsSlider(false);
  };
  const navigate = useNavigate();
  return (
    <>
    {isSlider === true && (
      <>
      <div className='bodu'>
    <div className='heading'> 
        <h3>SIP Calculator</h3>
    </div>
    <div >
        <button className='back'  onClick={() => navigate('/')}>⬅ Back</button>
    </div>
    <div className='main'>
            <div className='main1'>
            <div>
             <h4 className='siph'>Calculate the estimated wealth you can create by Monthly Investment (Rs.)</h4>
             </div>
             <div className='intdiv'>
               <h4 className='siph'>Monthly Savings(Rs.)</h4>
             </div>
            
             <div className='intdiv'>
               <h4 className='siph'>Investment Periods(Yr)</h4>
             </div>
             <div className='intdiv'>
               <h4 className='siph'>Expected Return Rate(%P.A)</h4>
             </div>
             <div className='intdiv'>
               <h4 className='siph'>Estimated Inflation Rate(%)</h4>
             </div>
            </div>
            <button className='button1' onClick={changeState}>Calculate</button>
        </div>
    </div>
    {/* Sliders */}
    <Box sx={{ width: 1400 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <div style={{margin:218,marginLeft:575}}>
            <Slider 
              value={typeof investment === "number" ? investment : 5000}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              marks={saving}
              step={500}
              min={5000}
              max={1000000}
              color="secondary"
              defaultValue={5000}
              
               valueLabelDisplay="auto"
             
            />   
          </div>
        </Grid>
        <Grid item>
          <Input
            value={investment}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 500,
              max: 1000000,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: 1170 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <div style={{marginTop:-222,marginLeft:582}}>
            <Slider 
              value={typeof period === "number" ? period : 50}
              onChange={handleSliderChangee}
              aria-labelledby="input-slider"
              marks={years}
              step={1}
              min={1}
              max={50}
              color="secondary"
              valueLabelDisplay="auto"      
            /></div>
        </Grid>
        <Grid item>
          <Input2
            value={period}
            size="small"
            onChange={handleInputChangee}
            onBlur={handleBlurr}
            inputProps={{
              step: 1,
              min: 1,
              max: 50,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: 1170 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <div style={{marginTop:-186,marginLeft:618}}>
            <Slider 
              value={typeof returnRate === "number" ? returnRate : 30}
              onChange={handleSliderChangeee}
              aria-labelledby="input-slider"
              marks={rreturn}
              step={0.5}
              min={0}
              max={30}
              color="secondary"
              valueLabelDisplay="auto"
            />
          </div>
        </Grid>
        <Grid item>
          <Input3
            value={returnRate}
            size="small"
            onChange={handleInputChangeee}
            onBlur={handleBlurrr}
            inputProps={{
              step: 0.5,
              min: 1,
              max: 30,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ width: 1170 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <div style={{marginTop:-152,marginLeft:610}}>
            <Slider 
              value={typeof inflation === "number" ? inflation : 15}
              onChange={handleSliderChangeeee}
              aria-labelledby="input-slider"
              marks={irate}
              step={0.1}
              min={0}
              max={15}
              color="secondary"
              valueLabelDisplay="auto"       
            />
          </div>
        </Grid>
        <Grid item>
          <Input4
            value={inflation}
            size="small"
            onChange={handleInputChangeeee}
            onBlur={handleBlurrrr}
            inputProps={{
              step: 0.1,
              min: 0,
              max: 15,
              type: "number",           
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </>
         )}
          {isSlider === false && (
        <div>
          <Result invested={investment} period={period} finalVal={final} graphData={graph}/>
        </div>
      )}
    </>
    
  ) 
}
export default Sip;
