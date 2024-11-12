import { setUser } from "../utils/auth";
import { useState, useEffect } from "react";

const MainWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const handler = async () => {
      setLoading(true);

      await setUser();

      setLoading(false);
    };

    handler();
  }, []);

  return <>{loading ? null : children}</>;
};

export default MainWrapper;
