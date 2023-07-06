import "./App.css";
import Apartment from "./Components/Apartment/Apartment";
import Navigation from "./Components/Navigation/Navigation";
import BlackBox from "./Components/BlackBox/BlackBox";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="App mt-2 ">
      <Navigation
        titleone="HOME"
        titletwo="ABOUT"
        titlethree="WORK"
        titlefour="CONTACT"
      />
      <div className=" row m-5   mx-auto pt-2 ">
      <div className="col-md-6 ps-5">
      <Apartment  />
      </div>
      <div className="col-md-6 pe-5">
        <BlackBox
          Title="FUNCTION"
          titletwo="LOCATION"
          titlethree="PROGRAM"
          titlefour="STATUS"
          caption="Monu Sharma"
          captiontwo="Chandigarh"
          captionthree="java script"
          captionfour="Uploading"
        />
        </div>
      </div>
<div className="row ">
<div className="citty col-md-3 col-sm-6 ">
      <Card city='Chandigarh' office='Haryana' />
      </div>
<div className="citty col-md-3 col-sm-6 ">
      <Card city='Chandigarh' office='Haryana' />
      </div>
<div className="citty col-md-3 col-sm-6 ">
      <Card city='Chandigarh' office='Haryana' />
      </div>
<div className="citty col-md-3 col-sm-6 ">
      <Card city='Chandigarh' office='Haryana' />
      </div>
   
      </div>
    </div>
  );
}

export default App;
