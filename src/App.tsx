import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Login, Main, Register } from "./pages";
import { Navbar, Sidebar } from "./components";
import { createContext, useEffect, useState } from "react";
import { checkAuthentication } from "./hooks";

export const UserContext = createContext({
  user: {
    isAuthen: false,
    profileMode: {
      mode: "myProfile",
      userId: null,
    },
  },
  setUser: (_newUser: {
    isAuthen: boolean;
    profileMode: { mode: string; userId: any };
  }) => {},
});

function App() {
  const [user, setUser] = useState(() => {
    // const token = localStorage.getItem("token");
    const userInfoString = localStorage.getItem("userInfo");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    return {
      // isAuthen: !!token,
      isAuthen: true,
      profileMode: {
        mode: "myProfile",
        userId: userInfo?.userId || null,
      },
    };
  });

  useEffect(() => {
    checkAuthentication({ setUser });
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <div className="flex space-x-2 w-full h-screen">
          <div className={`w-2/8 ${user?.isAuthen ? "block" : "hidden"}`}>
            {user?.isAuthen && <Sidebar />}
          </div>
          <div className={`${user?.isAuthen ? "w-6/8" : "w-full"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route element={<ProtectedRoute user={user} redirectPath="/" />}>
                <Route path="main" element={<Main />} />
              </Route>
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;

const ProtectedRoute = ({
  user,
  redirectPath,
}: {
  user: { isAuthen: boolean; profileMode: { mode: string; userId: number } };
  redirectPath: string;
}) => {
  const navigate = useNavigate();

  if (!user.isAuthen) {
    navigate(redirectPath, { replace: true });
    return null;
  }

  return <Outlet />;
};
