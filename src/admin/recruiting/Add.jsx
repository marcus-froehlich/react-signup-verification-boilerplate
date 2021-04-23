import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import Department from "./Department";

import { departmentService, recruitingService, alertService } from "@/_services";

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
    var department = document.getElementById("department-select").value;
    var model = { "recruitingText": htmlText, "title": title, "departmentId": department }
    recruitingService
      .create(model)
      .then(() => { alertService.success("Eintragung erfolgreich"); setTimeout(() => { }, 2000); })
      .then(() => location.reload());
      event.preventDefault();
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="container-xl">
        <div className="box-recruiting">
          <form onSubmit={this.handleSubmit} encType="text/plain">
            <input id="inputTitle" type="text" placeholder="Aussagekräftige Überschrift" className="mb-3 p-2" />
            <Department/>
            <Editor
              editorState={editorState}
              wrapperClassName="editor-wrapper"
              editorClassName="editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <div className="mr-0 w-25">
              <input className="btn-sub mr-2" type="submit" value="Speichern" />
            </div>
          </form>
          <textarea
            className="draftAreaHidden"
            id="draftAreaHidden"
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
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
