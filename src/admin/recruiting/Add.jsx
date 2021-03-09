import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { recruitingService, alertService } from "@/_services";

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = "<p></p>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };

  handleSubmit(event) {
    var htmlText = document.getElementById("draftAreaHidden").value;
    recruitingService.create(htmlText)
    .then(() => {alertService.success("Eintragung erfolgreich");
    <Redirect to={{path: `/admin/`}}/>});

    event.preventDefault();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="box-recruiting">
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          editorClassName="editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <form onSubmit={this.handleSubmit} encType="text/plain">
          <div className="mr-0 w-25">
            <input className="btn" type="submit" value="Speichern" />
          </div>
        </form>
        <textarea
          className="draftAreaHidden"
          id="draftAreaHidden"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}

const Add = () => (
  <div>
    <EditorConvertToHTML />
  </div>
);

export { Add };
