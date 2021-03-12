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
    var title = document.getElementById("inputTitle").value;
    var model = {"recruitingText": htmlText, "title": title }
    recruitingService
      .create(model)
      .then(() => { alertService.success("Eintragung erfolgreich"); setTimeout(() => {}, 2000); })      
      .then(() => location.reload());

    event.preventDefault();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="box-recruiting">
        <form onSubmit={this.handleSubmit} encType="text/plain">
          <input id="inputTitle" type="text" placeholder="Aussagekräftige Überschrift" className="mb-3 p-2"/>
        <Editor
          editorState={editorState}
          wrapperClassName="editor-wrapper"
          editorClassName="editor"
          onEditorStateChange={this.onEditorStateChange}
        />
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
