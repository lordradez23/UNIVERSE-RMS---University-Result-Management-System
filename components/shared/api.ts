import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach Bearer token
api.interceptors.request.use(
  (config) => {
    const tokens = localStorage.getItem("auth_tokens");
    if (tokens) {
      const { access } = JSON.parse(tokens);
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not already retrying
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const tokensStr = localStorage.getItem("auth_tokens");
        if (!tokensStr) throw new Error("No tokens found");

        const { refresh } = JSON.parse(tokensStr);
        
        // Call refresh endpoint
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"}/token/refresh/`, {
          refresh,
        });

        const { access } = response.data;
        
        // Update storage
        localStorage.setItem("auth_tokens", JSON.stringify({ access, refresh }));

        // Update current request header
        originalRequest.headers.Authorization = `Bearer ${access}`;
        
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token failed or expired
        localStorage.removeItem("auth_tokens");
        window.location.href = "/login?error=session_expired";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
