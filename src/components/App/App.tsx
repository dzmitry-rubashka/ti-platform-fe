import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchedulePage from "pages/SchedulePage";
import CandidatePage from "pages/CandidatePage";
import InterviewPage from "pages/InterviewPage";
import InterviewDetailsPage from "pages/InterviewDetailsPage";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/Header";
import AppWrapper from "./styles";

const App: React.FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="*" element={<SchedulePage />} />
          <Route path="/candidate" element={<CandidatePage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/interview/:id" element={<InterviewDetailsPage />} />
        </Routes>
      </AppWrapper>
    </ErrorBoundary>
  </BrowserRouter>
);
export default App;
