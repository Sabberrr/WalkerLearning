import ProblemForm from "../../components/ProblemForm/ProblemForm";
import Chatbot from "../../components/Chatbot/Chatbot";

export default function ChatContainer() {

    return (
        <div className="chat_container">
            <ProblemForm/>
            <Chatbot/>
        </div>
    )
}