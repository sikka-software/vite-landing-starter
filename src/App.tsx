import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";

import Landing from "@/pages/Landing";

import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>
        <Toaster
          position="bottom-right"
          richColors
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          style={{
            fontFamily: "var(--font-family)",
          }}
        />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
