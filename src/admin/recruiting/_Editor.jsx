import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { recruitingService, alertService } from "@/_services";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const loadAsyncData = (currentId) => {
  return recruitingService.getById(currentId);
};

export default class _Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      loading: false,
      editorState: null
    };
  }

  componentDidMount() {
    this.handleLoad();
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  onContentStateChange = (contentState) => {
    this.setState({ contentState });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  update = () => {
    //this.setState({ "convertedContent": draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) });
    var model = {"id": this.state.id, "recruitingText": draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
    recruitingService.put(model)
    .then(() => { alertService.success("Speichern erfolgreich"); setTimeout(() => {}, 2000); })      
    .then(() => location.reload());
  }

  handleLoad = async () => {
    this.setState({
      loading: true,
    });
    this._asyncRequest = loadAsyncData(this.state.id);
    const externalData = await this._asyncRequest;
    const _html = htmlToDraft(externalData.recruitingText);
    const contentState = ContentState.createFromBlockArray(
      _html.contentBlocks,
      _html.entityMap
    );
    const editorState = EditorState.createWithContent(contentState);

    this._asyncRequest = null;
    this.setState({
      loading: false,
      editorState,
    });
  };

  render() {
    const { loading } = this.state;
    const { currentId } = this.state.id;
    const { editorState } = this.state;
    return (
      <div className="_Editor">
        <div>
          <h3>{loading && "Loading..."}</h3>
        </div>
        <div className="_Editor">
          <Editor
            editorClassName={"report-editor"}
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onContentStateChange}
          />
        </div>
        <button className="btn-sub mr-2" onClick={this.update}>Speichern</button>
        <button className="btn-n" onClick={() => {window.history.back()}}>Zurück</button>
      </div>
    );
  }
}
