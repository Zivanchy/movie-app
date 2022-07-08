interface Rating {
  source: string;
  value: string;
}

const MovieRating = ({ source, value }: Rating) => {
  return (
    <div className="ms-2 d-flex flex-column align-items-center justify-content-center list-group-item list-group-item-warning">
      <h4>{source}</h4>
      <p>{value}</p>
    </div>
  );
};

export default MovieRating;
