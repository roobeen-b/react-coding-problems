import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import { allProjects } from "./config";
import PageLayout from "./page/layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {allProjects.map((project) => (
          <Route key={project.name} element={<PageLayout />}>
            <Route
              key={project.name}
              path={project.path}
              element={project.component}
            />
          </Route>
        ))}
      </Routes>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <RatingStar noOfStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      {/* <LoadMore /> */}
      {/* <InfiniteScroll /> */}

      {/* Tree view / Recursive navigation menu / menu UI component */}
      {/* <TreeView /> */}

      {/* <QrGenerator /> */}
      {/* <ThemeToggler /> */}
      {/* <ProgressScrollIndicator /> */}
      {/* <CustomTabs /> */}
      {/* <ModalPopup /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}

      {/* Feature Flag */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* <FetchTest /> */}

      {/* <OutsideClickTest /> */}

      {/* <WindowResizeTest /> */}

      {/* <ScrollToTopBottom /> */}

      {/* <ScrollToSection /> */}
    </div>
  );
}

export default App;
