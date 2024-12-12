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
  },
  {
    name: "Random Color",
    path: "/random-color",
    component: <RandomColor />,
  },
  {
    name: "Rating Star",
    path: "/rating-star",
    component: <RatingStar noOfStars={10} />,
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
  },
  {
    name: "Load More",
    path: "/load-more",
    component: <LoadMore />,
  },
  {
    name: "Infinite Scroll",
    path: "/infinite-scroll",
    component: <InfiniteScroll />,
  },

  {
    name: "Tree View",
    path: "/tree-view",
    component: <TreeView />,
  },
  {
    name: "Qr Generator",
    path: "/qr-generator",
    component: <QrGenerator />,
  },
  {
    name: "Theme Toggler",
    path: "/theme-toggler",
    component: <ThemeToggler />,
  },
  {
    name: "Progress Scroll Indicator",
    path: "/progress-scroll-indicator",
    component: <ProgressScrollIndicator />,
  },
  {
    name: "Custom Tabs",
    path: "/custom-tabs",
    component: <CustomTabs />,
  },
  {
    name: "Modal Popup",
    path: "/modal-popup",
    component: <ModalPopup />,
  },
  {
    name: "Github Profile Finder",
    path: "/github-profile-finder",
    component: <GithubProfileFinder />,
  },
  {
    name: "Search Autocomplete",
    path: "/search-autocomplete",
    component: <SearchAutocomplete />,
  },
  {
    name: "Tic Tac Toe",
    path: "/tic-tac-toe",
    component: <TicTacToe />,
  },
  {
    name: "Feature Flag",
    path: "/feature-flag",
    component: (
      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
    ),
  },
  {
    name: "Fetch Test",
    path: "/fetch-test",
    component: <FetchTest />,
  },
  {
    name: "Outside Click Test",
    path: "/outside-click-test",
    component: <OutsideClickTest />,
  },
  {
    name: "Window Resize Test",
    path: "/window-resize-test",
    component: <WindowResizeTest />,
  },
  {
    name: "Scroll To Top Bottom",
    path: "/scroll-to-top-bottom",
    component: <ScrollToTopBottom />,
  },
  {
    name: "Scroll To Section",
    path: "/scroll-to-section",
    component: <ScrollToSection />,
  },
];
