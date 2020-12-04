import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";

const ShowAllForks = () => {
  const forksPerPage = 5;
  const [activePage, setCurrentPage] = useState(1);
  const [dataForks, setDataForks] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("http://localhost:5000/show-forks");
      setDataForks(data);
    };
    fetchData().then(r => r);
  }, []);
  
  const indexOfLastFork = activePage * forksPerPage;
  const indexOfFirstFork = indexOfLastFork - forksPerPage;

  return (
    <div>
      <div className="result">
      </div>
      <div>
        {dataForks.forks &&
        dataForks.forks.slice(indexOfFirstFork, indexOfLastFork).map(el => (
          <ul key={el._id}>
            <li>{el._id}</li>
            <li>{el.createForkName}</li>
            <li>{el.createForkMessage}</li>
            <li>{el._id}</li>
          </ul>
        ))
        }
      </div>
      <div className="pagination">
        <Pagination
          className="my-3"
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={12}
          pageRangeDisplayed={4}
          onChange={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </div>
  );
  
};

export default ShowAllForks;
