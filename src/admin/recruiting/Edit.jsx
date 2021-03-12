import React, { useEffect, useState } from "react";
import _Editor from "./_Editor";

function Edit({ match }) {

  return (
    <div className="editor">
      <_Editor id={match.params.id}/>
    </div>
  );
}
export { Edit };
