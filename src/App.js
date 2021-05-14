import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.js";
import "./App.css";
import LoginForm from "./components/LoginForm.js";

const App = () => {

    if (!localStorage.getItem("username")) return <LoginForm />


    return (
        <ChatEngine
            height="100vh"
            projectID="51d504bb-b6ac-4625-b59a-bee10192ffeb"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;