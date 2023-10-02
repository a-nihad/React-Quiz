import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext";

function App() {
  const { status } = useQuiz();

  return (
    <div className="h-screen w-screen bg-[#2A3335] text-white">
      <div className="m-auto w-[700px] pt-10">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <div className="space-y-8">
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </div>
          )}
          {status === "finished" && <FinishScreen />}
        </Main>
      </div>
    </div>
  );
}

export default App;
