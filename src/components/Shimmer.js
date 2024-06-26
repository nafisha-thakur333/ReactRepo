const Shimmer = () => {
  const numberOfDivs = 20;
  const shimmerDivs = [];

  for (let i = 0; i < numberOfDivs; i++) {
    shimmerDivs.push(
      <div key={i} className="h-72 m-5 w-52 rounded-md shadow-md bg-gray-100"></div>
    );
  }

  return <div className="flex flex-wrap px-3 py-3 m-[32px_90px]">{shimmerDivs}</div>;
};


export default Shimmer;