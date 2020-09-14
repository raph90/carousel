import React from "react";
import "./app.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/home.component";
import About from "../pages/About/about.component";
import Contact from "../pages/Contact/contact.component";
import NotFound from "../pages/NotFound/notFound.component";
import Header from "../LayoutComponents/Header/header.component";
import Footer from "../LayoutComponents/Footer/footer.component";

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
