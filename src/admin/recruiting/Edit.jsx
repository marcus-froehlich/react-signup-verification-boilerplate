import React, { useEffect, useState } from "react";
import _Editor from "./_Editor";

function Edit({ match }) {

  return (
    <div className="editor">
      <div className="container-xl">
        <_Editor id={match.params.id} />
      </div>
    </div>
  );
}
export { Edit };
