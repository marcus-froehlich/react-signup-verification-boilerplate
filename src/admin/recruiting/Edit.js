import React, { useState, useEffect } from "react";
import { recruitingService } from "@/_services";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { useForm, Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";

function Edit({ match }) {
  const { id } = match.params;
  const [edit, setEdit] = useState(0);
  

  useEffect(() => {
    recruitingService.getById(id)
    .then((data) => setEdit(data));
  }, []);

  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const handleSubmitOnClick = ({ editor_content }) => {
    console.log("editor_content ==> ", editor_content);
  };

  if (edit === 0) {
    return (
      <span className="spinner-border spinner-border-lg align-center"></span>
    );
  } else {
    const contentBlock = htmlToDraft(edit.recruitingText);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);

    return (
      <section>
        <form onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          editorClassName="editor"
        />
          <button type="submit" className="signup-button">
            Speichern
          </button>
        </form>
      </section>
    );
  }
}

export default Edit;
