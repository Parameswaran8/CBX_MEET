import React, { createContext, useState, ReactNode } from "react";

type AppContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const AppContext = createContext<AppContextType>({
  userName: "",
  setUserName: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState("Param");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

// import { createContext, useContext, useState, useEffect } from "react";
// import { storage } from "../storage/storage";
// import { api } from "../../utils/utils";

// export const Context = createContext<any>(null);

// export const useData = (): Record<any, any> => {
//   const data = useContext(Context);
//   return data;
// };
// type TeamMember = {
//   name: string;
//   email: string;
//   role: string;
//   department: string;
//   password: string;
//   resetPass: boolean;
//   navigation: any; // You can replace 'any' with a proper NavigationProp if needed
// };

// type ToolList = {
//   toolName: string;
//   assignTester: string;
// };

// export const ContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [user, setUser] = useState(null);
//   const [bugList, setBugList] = useState([]);
//   const [settings, setSettings] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
//   const [toolList, setToolList] = useState<ToolList[]>([]);

//   const [token, setToken] = useState(() => {
//     // Try to get token from cookies on initial load
//     return storage.getString("userToken") || null;
//   });
//   const [headers, setHeaders] = useState({
//     "Content-Type": "application/json",
//     authorization: token ? `Bearer ${token}` : "",
//   });

//   // Update headers when token changes
//   useEffect(() => {
//     setHeaders({
//       "Content-Type": "application/json",
//       authorization: token ? `Bearer ${token}` : "",
//     });
//   }, [token]);

//   // Persist token to cookies
//   useEffect(() => {
//     if (token) {
//       storage.set("userToken", token);
//     } else {
//       storage.delete("userToken");
//     }
//   }, [token]);

//   const login = () => setIsAuthenticated(true);
//   const logout = async () => {
//     storage.delete("userToken");
//     setIsAuthenticated(false);
//   };

//   const value = {
//     headers,
//     setHeaders,
//     user,
//     setUser,
//     token,
//     setToken,
//     bugList,
//     setBugList,
//     settings,
//     setSettings,
//     login,
//     logout,
//     isAuthenticated,
//     teamMembers,
//     setTeamMembers,
//     toolList,
//     setToolList,
//   };

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     const token = storage.getString("userToken");
//     setIsLoading(true);
//     console.log("Token found", token, "user", user);
//     if (token && !user) {
//       try {
//         console.log("Fetching user data with token:", token);
//         api
//           .get("/users/getUser", {
//             headers,
//           })
//           .then((response) => {
//             console.log("User data fetched successfully:", response.data);
//             setUser(response.data);
//             login();
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     }

//     try {
//       setIsAuthenticated(false);
//     } catch (error) {
//       console.error("Error checking auth status:", error);
//       setIsAuthenticated(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) return null;
//   return <Context.Provider value={value}>{children}</Context.Provider>;
// };
