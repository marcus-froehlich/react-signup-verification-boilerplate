import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import { recruitingService } from "@/_services";
import htmlToDraft from 'html-to-draftjs';


export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    const content = recruitingService.getById(props.match.params.id);
    const contentState = ContentState.createFromBlockArray(content);
    const editorState = EditorState.createWithContent(contentState);

    this.state = {
      contentState,
      editorState,
      content
    };
  }

  onContentStateChange = contentState => {
    this.setState({
      contentState
    });
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    const { content } = this.state;
    const blocksFromHtml = htmlToDraft(content);
    console.log(blocksFromHtml);
    return (
      <div className="Edit">
        <Editor
          editorClassName={"report-editor"}
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          onContentStateChange={this.onContentStateChange}
        />
      </div>
    );
  }
}
