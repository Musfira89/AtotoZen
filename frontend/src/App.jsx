import "./App.css";
import ChatScheduleForm from "./components/ChatScheduleForm";
import EmployeesSection from "./components/EmployeesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealthHRSection from "./components/HealthHRSection";
import Navbar from "./components/Navbar";
import SolutionSection from "./components/SolutionSection";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HealthHRSection />
      <EmployeesSection />
      <SolutionSection />
      <ChatScheduleForm />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
