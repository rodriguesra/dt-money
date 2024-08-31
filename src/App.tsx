import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/default.ts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  );
}

export default App;
