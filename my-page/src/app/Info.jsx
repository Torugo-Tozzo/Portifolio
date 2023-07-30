const Info = ({ title, description }) => {
  return (
    <div className="bg-black dark:bg-white  p-4 rounded-lg shadow-lg px-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Info;
