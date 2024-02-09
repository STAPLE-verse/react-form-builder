/**
  * <HeaderBar />
  */

import React from 'react';
// import Grip from '../multi-column/grip';
import DragHandle from './component-drag-handle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="toolbar-header">
        <span className="badge badge-secondary">{this.props.data.text}</span>
        <div className="toolbar-header-buttons">
          {this.props.data.element !== 'LineBreak' &&
            <div className="btn is-isolated" onClick={this.props.editModeOn.bind(this.props.parent, this.props.data)}><FontAwesomeIcon icon="is-isolated fas fa-edit" /></div>
          }
          <div className="btn is-isolated" onClick={this.props.onDestroy.bind(this, this.props.data)}><FontAwesomeIcon icon="is-isolated fas fa-trash" /></div>
          {/* {!this.props.data.isContainer &&
            <DragHandle data={this.props.data} index={this.props.index} onDestroy={this.props.onDestroy} setAsChild={this.props.setAsChild} />
          } */}

          <DragHandle data={this.props.data} index={this.props.index} onDestroy={this.props.onDestroy} setAsChild={this.props.setAsChild} />
        </div>
      </div>
    );
  }
}
