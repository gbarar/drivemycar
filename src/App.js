import React, { useState } from "react";
import styled from 'styled-components'
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss' 
import YouTube from "react-youtube";
import "./App.css";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './App.css';
// import { spacing, palette } from '@material-ui/system';
import icon from "/Users/gracebarar/Documents/Winter Quarter 2021/HCDE 438/drivemycar/src/Asset 6.png";
import icon2 from "/Users/gracebarar/Documents/Winter Quarter 2021/HCDE 438/drivemycar/src/Asset 7.png";
import icon3 from "/Users/gracebarar/Documents/Winter Quarter 2021/HCDE 438/drivemycar/src/icon.png";

const Box = styled.div`
  background-color: #fecee9;
  position:absolute;
  width: 16%;
  height: 200px;
  right:25px; // eslint-disable-next-line 
  margin-top:160px; 
  display:flex;
  justify-content:center;
  align-items:flex-start;
`;
const Box4 = styled.div`
  background-color: none;
  position:absolute;
  width: 16%;
  height: 200px;
  right:25px; // eslint-disable-next-line 
  margin-top:160px; 
  display:flex;
  justify-content:center;
  align-items:flex-start;
`;
const Box2 = styled.div`
  background-color: #503b31;
  color:#fecee9;
  position:absolute;
  width: 16%;
  height: 90px;
  right:25px;
  display:flex;
  justify-content:center;
  align-items:flex-start;
  margin-top:140px;  
  font-size:.91rem;
  flex-direction:row;
  font-family:"PT Sans";
`;
const Box3 = styled.div`
  background-color: none;
  color:#fecee9;
  position:absolute;
  width: 16%;
  height: 70px;
  right:25px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-end;
  margin-top:170px; 
  font-size:1.2rem;

  font-family:"PT Sans";
 
`;


function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



  const links = {
    "Select a city below and start exploring!": "ubFq-wV3Eic",
    "BUENOS AIRES, ARGENTINA": "T2AMtaXlfmw",
    "NEW YORK, USA": "MeZ8P73JNtw",
    "AMSTERDAM, NETHERLANDS": "Xuo4uCZxNrE",
    "BERLIN, GERMANY":"R_qfsPcnw-w",
    "CHICAGO, USA":"3ma3yXXc3V8",
    "DELHI, INDIA":"_UlKnvXKUWE",
    "GUADALAJARA, MEXICO":"2LW3uIctX0Q",
    "LOS ANGELES, USA":"4zcgCx2MjMQ",
    "MOSCOW, RUSSIA":"YORkrd05BtA",
    "PARIS, FRANCE":"nqWtGWymV6c",
    "SEATTLE, USA":"rjVD1-1mbuE"
  };

  const rlinks ={
    "Like FM 97.1":"https://20833.live.streamtheworld.com/FMLIKEAAC.aac",
    "Hot 97":"https://16983.live.streamtheworld.com/WQHT.mp3?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTYxNDgxMjQ4MSwiaXNzIjoidGlzcnYifQ.Fsplu_C8n6xpNYRQCzc9pHekCIaSjsRlMoky8-L1DSg",
    "Radio Decibel":"https://icecast.globallogic.nl/decibel.mp3",
    "Flux FM":"https://fluxfm.hoerradar.de/fluxfmberlin-live-mp3-hq?sABC=60468sqp%230%235p58nn084q38sp434n9907261qno32q0%23gharva&=&amsparams=playerid:tunein;skey:1615237084",
    "WSRB 106.3":"https://17553.live.streamtheworld.com/WSRBFMAAC_SC",
    "Air FM Rainbow":"https://radioindia.net/radio/rainbow_radio/icecast.audio",
    "Los 40":"https://17973.live.streamtheworld.com/LOS40_GDLAAC.aac",
    "93.1 JACK FM":"https://19273.live.streamtheworld.com/KCBSFMAAC_SC?sbmid=d9cfae7e-4a14-45d3-8286-ea2f5db68f35&DIST=CBS&TGT=radiocomPlayer&SRC=CBS&lsid=cookie:a70ac215-3e5b-4e58-8c75-d4bfb0fb2f73",
    "Русские Песни":"https://listen.rusongs.ru/ru-aac-64",
    "Radio FG 98.2":"https://radiofg.impek.com/fg",
    "KUBE 93.3":"https://n0eb-e2.revma.ihrhls.com/zc2577?rj-ttl=5&rj-tok=AAABeBYGxRUAzap2yFpyvVFWTw"
  }
  const cities = ["BUENOS AIRES, ARGENTINA", "NEW YORK, USA","AMSTERDAM, NETHERLANDS","BERLIN, GERMANY","CHICAGO, USA","DELHI, INDIA", "GUADALAJARA, MEXICO",
  "LOS ANGELES, USA","MOSCOW, RUSSIA", "PARIS, FRANCE","SEATTLE, USA"];
  const city = ["BUENOS AIRES","NEW YORK","AMSTERDAM","BERLIN", "CHICAGO","DELHI","GUADALAJARA","LOS ANGELES","MOSCOW","PARIS","SEATTLE"];
  const radios = ["Like FM 97.1", "Hot 97","Radio Decibel","Flux FM","WSRB 106.3","Air FM Rainbow","Los 40","93.1 JACK FM","Русские Песни","Radio FG 98.2","KUBE 93.3"]
  const BA = cities[0]
  const NY = cities[1]
  const AM = cities[2]
  const BR = cities[3]
  const CH = cities[4]
  const DE = cities[5]
  const GU = cities[6]
  const LA = cities[7]
  const MO = cities[8]
  const PA = cities[9]
  const SE = cities[10]
  const baR = radios[0]
  const nyR = radios[1]
  const amR = radios[2] // eslint-disable-next-line 
  const brR = radios [3] // eslint-disable-next-line 
  const chR = radios[4]
  const deR = radios[5]
  const guR = radios[6]
  const laR = radios[7]
  const moR = radios[8]
  const paR = radios[9]
  const seR = radios[10]
  const [selectedCity, setSelectedCity] = useState("Select a city below and start exploring!");
  const [selectedRadio, setRadio]=useState();
  const [selectedPlayer, setPlayer]=useState();
 
  // const [isNoiseMuted, setIsNoiseMuted] = useState(false);
 
  // const speed = 0.5;
  const opts = {
    // height: "100%",
    // width: "100%",
    playerVars: {
      enablejsapi:1,
      start:getRandomInt(1000),
      autoplay: 1,
      fs: 0,
      disablekb: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      origin:1,
      rel: 1,
      loop:1,
      mute:1,
      deletecontrols:0,
      frameborder:0,
    },
  };
  console.log();



  return (
    <div className="App">
      <Header>
      <img src={icon3} alt=" " style={{width:"60px", paddingRight:"30px", paddingLeft:"30px", paddingTop:"-10px"}}></img> DRIVE MY CAR 
      </Header>
        
        <div className="Video">
    
        <YouTube
          videoId={links[selectedCity]}
          opts={opts}
          onPlaybackRateChange={() => {}}
        />
       </div>  
        
        <Box></Box>
        <Box2>
         <p>{selectedCity}</p>
         </Box2>

          <Box3> 
          <div><p>{selectedPlayer}</p></div>
          </Box3>
          {/* position: "absolute", top: 250, right: 149, */}

        <Box4>
        <AudioPlayer
          style={{ effect:"none",border:"hidden",background: "#fecee9", height: "0px",width: '0px', position:"absolute", display:"flex",
          direction:"row", content:"center",justifyContent:"center",alignItems:"center", top:"120px"}}
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          defaultCurrentTime="" 
          defaultDuration="-"
          showDownloadProgress={false}
          showFilledProgress={false}
          customIcons={{
            play: <img src={icon} alt=" "style-={{height:"2px",width:"100%"}}
             />,
            pause: <img src={icon2} alt=" "style-={{height:"2px",width:"100%"}}
             />
          }}
          // muted={isNoiseMuted}
          src={rlinks[selectedRadio]}>
          customProgressBarSection={
            [
               RHAP_UI.PROGRESS_BAR="",
              RHAP_UI.CURRENT_TIME = "",
              <div>/</div>,
              RHAP_UI.DURATION="",
             ]
            }
        </AudioPlayer>
           
        </Box4>  
        

    
        <Footer>
        <Button
            value={AM}
            value2={amR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(AM) // eslint-disable-next-line 
              {setRadio(amR) // eslint-disable-next-line
              {setPlayer([radios[2]])}}
              
            }}
          >  
          {city[2]}
          </Button>
          <Button
            value={BR}
            value2={brR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(BR) // eslint-disable-next-line 
              {setRadio(brR) // eslint-disable-next-line
              {setPlayer([radios[3]])}}
              
            }}
          >  
          {city[3]}
          </Button>
          <Button
            value={BA}
            value2={baR}
          
            onClick={(event) => 
              {setSelectedCity(BA);
              setRadio(baR)
              setPlayer([radios[0]])
            }}
          >  
          {city[0]}
          </Button>
          <Button
            value={CH}
            value2={chR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(CH) // eslint-disable-next-line 
              {setRadio(chR) // eslint-disable-next-line
              {setPlayer([radios[4]])}}
              
            }}
          >  
          {city[4]}
          </Button>
                  
          <Button
            value={DE}
            value2={deR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(DE) // eslint-disable-next-line 
              {setRadio(deR) // eslint-disable-next-line
              {setPlayer([radios[5]])}}
              
            }}
          >  
          {city[5]}
          </Button>
          <Button
            value={GU}
            value2={guR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(GU) // eslint-disable-next-line 
              {setRadio(guR) // eslint-disable-next-line
              {setPlayer([radios[6]])}}
              
            }}
          >  
          {city[6]}
          </Button>
          <Button
            value={LA}
            value2={laR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(LA) // eslint-disable-next-line 
              {setRadio(laR) // eslint-disable-next-line
              {setPlayer([radios[7]])}}
              
            }}
          >  
          {city[7]}
          </Button>
          <Button
            value={MO}
            value2={moR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(MO) // eslint-disable-next-line 
              {setRadio(moR) // eslint-disable-next-line
              {setPlayer([radios[8]])}}
              
            }}
          >  
          {city[8]}
          </Button>
          <Button
            value={NY}
            value2={nyR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(NY) // eslint-disable-next-line 
              {setRadio(nyR) // eslint-disable-next-line
              {setPlayer([radios[1]])}}
              
            }}
          >  
          {city[1]}
          </Button>
          <Button
            value={PA}
            value2={paR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(PA) // eslint-disable-next-line 
              {setRadio(paR) // eslint-disable-next-line
              {setPlayer([radios[9]])}}
              
            }}
          >  
          {city[9]}
          </Button>
          <Button
            value={SE}
            value2={seR}
            onClick={(event) => // eslint-disable-next-line
              {setSelectedCity(SE) // eslint-disable-next-line 
              {setRadio(seR) // eslint-disable-next-line
              {setPlayer([radios[10]])}}
              
            }}
          >  
          {city[10]}
          </Button>

          
          
        </Footer>
    </div>
  );
}





const Header = styled.header`
  color:#503b31;
  font-size:45px;
  font-family:"PT Sans";
  width:100%;
  min-height:20px;
  max-height:78px;
  padding: 20px;
  padding-top:30px;
  padding-bottom:0px;
  box-sizing: border-box;
  text-align:left;
  display:flex;
  align-items:center;
  
`

const Button = styled.button`
  padding: 0;
  border: none;
  font-family:"PT Sans";
  background: none; 
  appearance: none;
  text-decoration:none;
  color:#9c89b8;
  font-size:1.2rem;

  &:focus {
    outline-style: none;
    outline-color: transparent;
    box-shadow: none;
    color: #503b31;
  }
  &:active {
    color: #503b31;
}

&:visited {
  color: #503b31;
}

&:hover {
  color: #503b31;
}
`

const Footer = styled.footer`
  background-color: #fecee9;
  height: 4rem;
  display:flex;
  align-items: center;
  justify-content:space-around;

  padding: 0 1rem;
  margin-bottom:0px;

  color:rgb(53, 39, 39);
  font-family:"PT Sans";

`
// Box = styled.div`
//   color: #fecee9;
//   width: 1000px;
//   position: absolute;
//   margin-top: 200px;

// `
export default App;