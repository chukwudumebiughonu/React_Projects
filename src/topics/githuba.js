import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css'
import Time from '../Time';

const FileList = ({ files }) => (
  <table className='file-list'>
    <tbody>
      { files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
)

FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
  <tr className='file-list-item'>
    {/* <td className='file-name'>{ file.name }</td> */ }
    <td><FileIcon file={ file }/></td>
    <td><FileName file={ file } /></td>
    <td><CommitMessage commit={ file.latestCommit } /></td>
    <td className='age'>
      <Time file={file.updated_at}/>
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

function FileIcon ({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder') {
    icon = 'fa-folder';
  };
  return (
    <td className='file-icon'>
      <i className={ `fa ${icon}` } />
    </td>
  );
}

FileIcon.propTypes = {
  file:PropTypes.object.isRequired
}

function FileName({ file }) {
  return (
    <>
      <FileIcon file={ file } />
      <td className='file-name'>{ file.name }</td>
    </>
  );
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
}

const CommitMessage = ({ commit }) => (
  <td className='commit-message'>
  { commit.message }
  </td>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },

  {
    id: 2,
    name: 'test',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial commit'
    }
  },

  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  },
];


ReactDOM.render(<FileList files={testFiles}/>, document.querySelector('#root'))
