import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = (props)=>  {
  
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              // element={<News pageSize={6} country="in" category="general" />}
            >
              {" "}
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />{" "}
            </Route>
            <Route
              exact
              path="/business"
              // element={<News pageSize={6} country="in" category="business" />}
            >
              {" "}
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />{" "}
            </Route>

            <Route
              exact
              path="/entertainment"
              // element={
              //   <News pageSize={6} country="in" category="entertainment" />
              // }
            >
              {" "}
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />{" "}
            </Route>

            <Route
              exact
              path="/health"
              // element={<News pageSize={6} country="in" category="health" />}
            >
              {" "}
              <News
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />{" "}
            </Route>

            <Route
              exact
              path="/science"
              // element={<News pageSize={6} country="in" category="science" />}
            >
              {" "}
              <News
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />{" "}
            </Route>

            <Route
              exact
              path="/sports"
              // element={<News pageSize={6} country="in" category="sports" />}
            >
              {" "}
              <News
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />{" "}
            </Route>

            <Route
              exact
              path="/technology"
              // element={<News pageSize={6} country="in" category="technology" />}
            >
              {" "}
              <News
                key="technology"
                 pageSize={6}
                country="in"
                category="technology"
              />{" "}
            </Route>
          </Switch>
        </Router>
      </div>
    );
}
export default App;
