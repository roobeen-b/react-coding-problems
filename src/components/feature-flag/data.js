const dummyApiResponse = {
  showCustomTab: true,
  showAccordian: true,
  showImageSlider: false,
  showThemeToggler: true,
  showRatingStar: true,
};

export default function getFeatureFlags() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(() => resolve(dummyApiResponse), 1000);
    } else {
      reject("No data found");
    }
  });
}
