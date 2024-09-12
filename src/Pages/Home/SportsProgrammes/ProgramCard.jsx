import { Link } from "react-router-dom";

const ProgramCard = ({ program,index }) => {
  const { name, image1 } = program;

  return (
    <div className="relative max-w-96 h-96 bg-cover bg-center bg-no-repeat hover:shadow-xl transition-transform transform  hover:bg-black hover:bg-opacity-70 group rounded-xl" >
      <div
        className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 group-hover:bg-gradient-to-t from-black to-transparent transition-transform group-hover:opacity-100 rounded-xl">
        <h2 className="card_effect text-white text-2xl md:text-3xl font-bold  translate-y-2 group-hover:-translate-y-4">
          {name}
        </h2>
        <Link className="card_effect text-white hover:text-amber-500 font-semibold mt-2  translate-y-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
