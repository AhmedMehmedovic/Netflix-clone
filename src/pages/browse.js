import React from "react";
import selectionFilter from "../utils/selection-filter";
import { useContent } from "../hooks";
import BrowseContainer from "../containers/browse";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, films });

  console.log(slides);

  ///Need movies and series
  //need slides
  //pass it to the browse container
  return <BrowseContainer slides={slides} />;
}

export default Browse;
