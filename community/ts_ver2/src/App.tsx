import router from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Spinner from "./components/Spinner";
import useThemeStore from "./zustand/themeStore";

const queryClient = new QueryClient();

function App() {
  // 📍 스토어의 모든 속성 가져오는 방법
  // const { isDarkMode } = useThemeStore();
  // 📍 스토어의 필요한 속성만 가져오기 : 구독 X
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  if (isDarkMode) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <React.Suspense fallback={<Spinner.FullScreen />}>
          <RouterProvider router={router} />
        </React.Suspense>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
