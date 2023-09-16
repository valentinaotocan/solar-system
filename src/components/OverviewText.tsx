interface OverviewContent {
  planet: {
    overview: {
      content: string;
    };
  };
}
function OverviewText({ planet }: OverviewContent) {
  return <p>{planet.overview.content}</p>;
}
export default OverviewText;
