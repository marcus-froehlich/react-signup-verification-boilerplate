import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { recruitingService } from "@/_services";
import htmlToDraft from "html-to-draftjs";

function Edit({ match }) {
  const { path } = match;
  const [edit, setEdit] = useState({ html: "", isFetching: false });

  useEffect(() => {
    const fetchHTML = () => {
      try {
        const data = recruitingService
          .getById(match.params.id)
          .then((data) =>
            setEdit({ html: data.recruitingText, isFetching: true })
          );
      } catch (e) {
        console.log(e);
      }
    };
    fetchHTML();
  }, []);

  let _html = htmlToDraft(edit.html);
  let _contentState = ContentState.createFromBlockArray(
    _html.contentBlocks,
    _html.entityMap
  );
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw);


  if (edit.isFetching) {
    return (
      <div className="editor">
        <Editor
          editorState={EditorState.createWithContent(_contentState)}
          onContentStateChange={setContentState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
        />
      </div>
    );
  } else {
    return <span className="spinner-border spinner-border-sm"></span>;
  }
}
export { Edit };
