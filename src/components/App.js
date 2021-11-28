import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/header";
import Footer from "./ui/footer";
import theme from "./ui/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import EngineeringPage from "./EngineeringPage";
import AWS from "./AWSPage";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          {/* <Route exact path="/" component={() => <div style={{height: "500px"}}>HOME</div>}/> */}
          <Route exact path="/" render={(props) => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/engineering" render={(props) => <EngineeringPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route
            exact
            path="/aws"
            render={props => (
              <AWS
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>Revolution</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>ESTMATE</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );  
}

export default App;
