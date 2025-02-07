import Procard from "./sub-components/Procard";

const Projects = () => {
  return (
    <>
      <div className="container ml-8  px-4 py-20">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[11rem] md:gap-x-8 md:gap-y-[8rem]">
          <Procard
            link="https://github.com/rohitdeka-1/MusicPlayerREACT"
            img="/Assets/image.png"
            name="MusicAPP"
          />
          <Procard
            link="https://github.com/rohitdeka-1/weatherReactAPP"
            img="/Assets/image999.png"
            name="WeatherAPP"
          />
          <Procard link="https://rhd-temp.vercel.app" img="/public/Assets/Gpt-chat.png" name="ChatBot(API)" />
          <Procard link="https://react-todo-list-3lhk.vercel.app/" img="/Assets/TodoList.png" name="Project 4" />
          <Procard link="https://www.rohitdeka.me" img="/Assets/Porfolio.png" name="Project 5" />
          
        </div>
      </div>
    </>
  );
};

export default Projects;
