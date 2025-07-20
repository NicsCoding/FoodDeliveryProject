import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ErrorHandling = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:1729",
      headers: { "Content-Type": "application/json" },
    });

    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const { status } = error.response;
        if (status === 404) {
          navigate.push("/404");
        } else if (status === 500) {
          navigate.push("/500");
        } else {
          navigate.push("/error"); // General error page
        }
        return Promise.reject(error);
      }
    );
    // Clean up the interceptor on unmount
    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, [history]);
};

export default ErrorHandling;
