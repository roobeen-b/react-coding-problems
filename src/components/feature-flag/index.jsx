import React, { useContext } from "react";
import { FeatureFlagContext } from "./context";
import CustomTabs from "../custom-tabs";
import Accordian from "../accordian";
import ImageSlider from "../image-slider";
import ThemeToggler from "../theme-toggler";
import RatingStar from "../rating-star";

const FeatureFlag = () => {
  const { loading, enabledFeatures } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showCustomTab",
      component: <CustomTabs />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"10"}
          page={"1"}
        />
      ),
    },
    {
      key: "showThemeToggler",
      component: <ThemeToggler />,
    },
    {
      key: "showRatingStar",
      component: <RatingStar />,
    },
  ];

  function checkIsFeatureEnabled(currentKey) {
    return enabledFeatures[currentKey];
  }

  if (loading) return <div>Loading! Please wait...</div>;

  return (
    <div>
      {componentsToRender.map((item) =>
        checkIsFeatureEnabled(item.key) ? (
          <span key={item.key}>{item.component}</span>
        ) : null
      )}
    </div>
  );
};

export default FeatureFlag;
