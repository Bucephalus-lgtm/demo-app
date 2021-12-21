import InputArea from "./InputArea";
import DisplayArea from "./DisplayArea";
import { ContactContextProvider } from "./Context";

export default function App(props) {
  return (
    <ContactContextProvider>
      <div className="container">
        <h1>Demo App</h1>

        <InputArea />
        <DisplayArea />
      </div>
    </ContactContextProvider>
  );
}
