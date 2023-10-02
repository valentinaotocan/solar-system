interface OverviewContent {
  planet: {
    structure: {
      content: string;
    };
  };
}
function OverviewText({ planet }: OverviewContent) {
  return <p>{planet.structure.content}</p>;
}
export default OverviewText;
