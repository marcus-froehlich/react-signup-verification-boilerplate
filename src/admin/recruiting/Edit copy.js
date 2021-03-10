import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState, ContentState } from "draft-js";
import { recruitingService } from "@/_services";
import htmlToDraft from "html-to-draftjs";

var data = null;

export default class Edit extends React.Component {
  constructor(props) {
    super(props);

    const blocksFromHtml = recruitingService
      .getById(props.match.params.id)
      .then(function xyz(result){
        data = htmlToDraft(result.recruitingText);
        return data;
      });
      console.log(data);
    const { contentBlocks, entityMap } = blocksFromHtml;

    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);

    this.state = {
      contentState,
      editorState,
    };
  }

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
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
