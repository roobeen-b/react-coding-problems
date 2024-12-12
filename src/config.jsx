import Accordian from "./components/accordian";
import CustomTabs from "./components/custom-tabs";
import FeatureFlag from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import InfiniteScroll from "./components/infinite-scroll";
import LoadMore from "./components/load-more";
import ModalPopup from "./components/modal-popup";
import ProgressScrollIndicator from "./components/progress-scroll-indicator";
import QrGenerator from "./components/qr-generator";
import RandomColor from "./components/random-color";
import RatingStar from "./components/rating-star";
import ScrollToSection from "./components/scroll-to-section";
import ScrollToTopBottom from "./components/scroll-to-top-bottom";
import SearchAutocomplete from "./components/search-autocomplete";
import ThemeToggler from "./components/theme-toggler";
import TreeView from "./components/tree-view";
import FetchTest from "./components/useFetch/fetchTest";
import OutsideClickTest from "./components/useOutsideClick/test";
import WindowResizeTest from "./components/useWindowResize/test";
import TicTacToe from "./components/tic-tac-toe";

export const allProjects = [
  {
    name: "Accordion",
    path: "/accordion",
    component: <Accordian />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/accordian",
  },
  {
    name: "Random Color",
    path: "/random-color",
    component: <RandomColor />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/random-color",
  },
  {
    name: "Rating Star",
    path: "/rating-star",
    component: <RatingStar noOfStars={10} />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/rating-star",
  },
  {
    name: "Image Slider",
    path: "/image-slider",
    component: (
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    ),
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/image-slider",
  },
  {
    name: "Load More",
    path: "/load-more",
    component: <LoadMore />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/load-more",
  },
  {
    name: "Infinite Scroll",
    path: "/infinite-scroll",
    component: <InfiniteScroll />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/infinite-scroll",
  },

  {
    name: "Tree View",
    path: "/tree-view",
    component: <TreeView />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/tree-view",
  },
  {
    name: "Qr Generator",
    path: "/qr-generator",
    component: <QrGenerator />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/qr-generator",
  },
  {
    name: "Theme Toggler",
    path: "/theme-toggler",
    component: <ThemeToggler />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/theme-toggler",
  },
  {
    name: "Progress Scroll Indicator",
    path: "/progress-scroll-indicator",
    component: <ProgressScrollIndicator />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/progress-scroll-indicator",
  },
  {
    name: "Custom Tabs",
    path: "/custom-tabs",
    component: <CustomTabs />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/custom-tabs",
  },
  {
    name: "Modal Popup",
    path: "/modal-popup",
    component: <ModalPopup />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/modal-popup",
  },
  {
    name: "Github Profile Finder",
    path: "/github-profile-finder",
    component: <GithubProfileFinder />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/github-profile-finder",
  },
  {
    name: "Search Autocomplete",
    path: "/search-autocomplete",
    component: <SearchAutocomplete />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/search-autocomplete",
  },
  {
    name: "Tic Tac Toe",
    path: "/tic-tac-toe",
    component: <TicTacToe />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/tic-tac-toe",
  },
  {
    name: "Feature Flag",
    path: "/feature-flag",
    component: (
      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
    ),
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/feature-flag",
  },
  {
    name: "Fetch Test",
    path: "/fetch-test",
    component: <FetchTest />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/fetch-test",
  },
  {
    name: "Outside Click Test",
    path: "/outside-click-test",
    component: <OutsideClickTest />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/outside-click-test",
  },
  {
    name: "Window Resize Test",
    path: "/window-resize-test",
    component: <WindowResizeTest />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/window-resize-test",
  },
  {
    name: "Scroll To Top Bottom",
    path: "/scroll-to-top-bottom",
    component: <ScrollToTopBottom />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/scroll-to-top-bottom",
  },
  {
    name: "Scroll To Section",
    path: "/scroll-to-section",
    component: <ScrollToSection />,
    code: "https://github.com/roobeen-b/react-coding-problems/tree/main/src/components/scroll-to-section",
  },
];
