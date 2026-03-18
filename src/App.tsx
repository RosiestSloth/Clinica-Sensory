import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { AbaPage } from "./pages/treatments/AbaPage";
import { CaaPage } from "./pages/treatments/CaaPage";
import { EquipePage } from "./pages/treatments/EquipePage";
import { PromptPage } from "./pages/treatments/PromptPage";
import { LEGACY_ROUTES, ROUTES } from "./constants/site";

function NotFoundPage() {
    return <Navigate to="/" replace />;
}

export default function App() {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.about} element={<AboutPage />} />
            <Route path={ROUTES.contact} element={<ContactPage />} />
            <Route path={LEGACY_ROUTES.contactUppercase} element={<Navigate to={ROUTES.contact} replace />} />
            <Route path={ROUTES.treatments.aba} element={<AbaPage />} />
            <Route path={ROUTES.treatments.caa} element={<CaaPage />} />
            <Route path={ROUTES.treatments.prompt} element={<PromptPage />} />
            <Route path={ROUTES.treatments.team} element={<EquipePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
