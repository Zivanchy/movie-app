interface MovieData {
  title: string;
  data: string;
}

const MovieData = ({ title, data }: MovieData) => {
  return (
    <div className="ms-5 my-2 d-flex align-items-center justify-content-start list-group-item list-group-item-dark bg-dark">
      <h2 className="me-3 w-25 text-light">{title}</h2>
      <p className="m-0 text-light align-self-center">{data}</p>
    </div>
  );
};

export default MovieData;
