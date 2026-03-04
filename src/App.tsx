import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme";

import {
  Main,
  Experience,
  Expertise,
  Contact,
  About,
  Footer,
  Navigation,
  Competency,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import OpenSource from "./components/OpenSource";
import Project from "./components/Project";

function App() {
    const [mode, setMode] = useState<string>("dark");

    const handleModeChange = () => {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    const currentTheme = mode === "dark" ? darkTheme : lightTheme;

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);

    return (
    <ThemeProvider theme={currentTheme}>
        <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <About/>
                <Expertise/>
                <Experience/>
                <Competency/>
                <Project/>
                <OpenSource/>
                {/* <Contact/> */}
            </FadeIn>
            <Footer />
        </div>
    </ThemeProvider>
    );
}

export default App;