interface StructureContent {
  planet: {
    overview: {
      content: string;
    };
  };
}
function InternalStructureText({ planet }: StructureContent) {
  return <p>{planet.overview.content}</p>;
}
export default InternalStructureText;
