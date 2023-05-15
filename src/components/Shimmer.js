/** @format */

const Shimmer = () => {
  return (
    <div>
      <div className='restaurant-list'>
        {Array(10)
          .fill("")
          .map((e, indx) => (
            <div key={indx} className='shimmer-card'></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
