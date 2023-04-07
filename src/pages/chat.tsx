import ChatContainer from '../containers/ChatContainer/ChatContainer';
import NavigationContainer from '../containers/NavigationContainer/NavigationContainer';

export default function ChatMain() {

    return (
      <main className="walker_app flex">
        <NavigationContainer />
        <ChatContainer />
      </main>
    )
  }
  