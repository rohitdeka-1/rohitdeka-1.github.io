import { motion } from "framer-motion";
import ShowCard from "./ShowCard";

const Procard = ({ link, img, name, description, tags }) => {

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-full overflow-hidden rounded-2xl border border-gray-700 shadow-md  transition-all duration-300 hover:shadow-lg  hover:scale-[1.02]"
    >
      {/* Project Image */}
      <img src={img} alt={name} className="w-full h-48  object-cover rounded-t-2xl" />

      {/* Overlay */}
      <div className="absolute inset-0  bg-black/85  flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        <p className="text-gray-300 text-sm mt-1 text-center px-4">{description}</p>
      </div>

      {/* Project Details */}
      <div className="p-4 bg-gray-900 hover:text-gray-100 text-white rounded-b-2xl">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 hover:text-gray-100 text-sm mt-1">{description}</p>

        {/* Tech Stack Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <ShowCard key={index} name={tag} />
          ))}
        </div>
      </div>
    </motion.a>
    
  );
};

export default Procard;
