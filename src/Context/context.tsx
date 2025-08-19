import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const AppContext = createContext<any>(null);

export const useData = (): Record<any, any> => {
  const data = useContext(AppContext);
  return data;
};
type TeamMember = {
  name: string;
  email: string;
  role: string;
  department: string;
  password: string;
  resetPass: boolean;
  navigation: any; // You can replace 'any' with a proper NavigationProp if needed
};

type ToolList = {
  toolName: string;
  assignTester: string;
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState("param");
  const [bugList, setBugList] = useState([]);
  const [settings, setSettings] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [toolList, setToolList] = useState<ToolList[]>([]);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [today_list, setToday_list] = useState<boolean>(false);
  const [calendarMark, setCalendarMark] = useState<boolean>(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeBottomSheet = useCallback(() => {
    setToday_list(false);
    setCalendarMark(false);
    bottomSheetModalRef.current?.dismiss();
    // console.log(60, today_list);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    index === -1 && (setToday_list(false), setCalendarMark(false));
    // console.log(65, index);
  }, []);

  const value = {
    user,
    setUser,
    toggleSidebar,
    setToggleSidebar,
    showLogoutModal,
    setShowLogoutModal,
    bottomSheetModalRef,
    openBottomSheet,
    closeBottomSheet,
    handleSheetChanges,
    today_list,
    setToday_list,
    calendarMark,
    setCalendarMark,
  };
  //  here 2
  return (
    <BottomSheetModalProvider>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </BottomSheetModalProvider>
  );
};

// const [token, setToken] = useState(() => {
//   // Try to get token from cookies on initial load
//   return storage.getString("userToken") || null;
// });
// const [headers, setHeaders] = useState({
//   "Content-Type": "application/json",
//   authorization: token ? `Bearer ${token}` : "",
// });

// Update headers when token changes
// useEffect(() => {
//   setHeaders({
//     "Content-Type": "application/json",
//     authorization: token ? `Bearer ${token}` : "",
//   });
// }, [token]);

// Persist token to cookies
// useEffect(() => {
//   if (token) {
//     storage.set("userToken", token);
//   } else {
//     storage.delete("userToken");
//   }
// }, [token]);

// const login = () => setIsAuthenticated(true);
// const logout = async () => {
//   // storage.delete("userToken");
//   setIsAuthenticated(false);
// };

// useEffect(() => {
//   checkAuthStatus();
// }, []);

// const checkAuthStatus = async () => {
//   const token = storage.getString("userToken");
//   setIsLoading(true);
//   console.log("Token found", token, "user", user);
//   if (token && !user) {
//     try {
//       console.log("Fetching user data with token:", token);
//       api
//         .get("/users/getUser", {
//           headers,
//         })
//         .then((response) => {
//           console.log("User data fetched successfully:", response.data);
//           setUser(response.data);
//           login();
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }

//   try {
//     setIsAuthenticated(false);
//   } catch (error) {
//     console.error("Error checking auth status:", error);
//     setIsAuthenticated(false);
//   } finally {
//     setIsLoading(false);
//   }
// };

// if (isLoading) return null;
