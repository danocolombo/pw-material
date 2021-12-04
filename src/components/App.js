import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/header";
// import Footer from "./ui/footer";
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
          <Route exact path="/integrations" component={() => <div>Integrations</div>} />
          <Route exact path="/enterprise" component={() => <div>Enterprise</div>} />
          <Route exact path="/recovery" component={() => <div>Recovery</div>} />
          <Route exact path="/cr" component={() => <div>Celebrate Recovery</div>} />
          <Route exact path="/hobbies" component={() => <div>Hobbies</div>} />
          <Route exact path="/woodshop" component={() => <div>Woodshop</div>} />
          <Route exact path="/kitchen" component={() => <div>Kitchen</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );  
}

export default App;
