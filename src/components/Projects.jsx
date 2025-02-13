import Procard from "./sub-components/Procard";

const Projects = () => {
  return (
    <>
      <div className="container ml-8  px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[11rem] md:gap-x-8 md:gap-y-[8rem]">
          <Procard
            link="https://music-player-react-pearl.vercel.app/"
            img="/Assets/image.png"
            name="MusicAPP"
          />
          <Procard
            link="https://rhd-temp.vercel.app/"
            img="/Assets/image999.png"
            name="WeatherApp"
          />
          <Procard
            link="https://deka-gpt.vercel.app"
            img="/Assets/Gpt-chat.png"
            name="ChatBot(API)"
          />

          <Procard
            link="https://react-todo-list-3lhk.vercel.app/"
            img="/Assets/TodoList.png"
            name="TodoList"
          />

          <Procard
            link="https://chat-app-seven-dun.vercel.app/"
            img="/Assets/ChatApp.png"
            name="ChatApp"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
