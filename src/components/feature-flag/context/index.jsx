import { createContext, useEffect, useState } from "react";
import getFeatureFlags from "../data";

export const FeatureFlagContext = createContext();

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFeatures, setEnabledFeatures] = useState({});

  const fetchFeatureFlags = async () => {
    setLoading(true);
    try {
      const response = await getFeatureFlags();
      if (response) setEnabledFeatures(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFeatures }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
