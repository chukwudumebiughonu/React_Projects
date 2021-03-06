import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const FileList = ({ files }) => (
  <table className='file-list'>
    <tbody>
      { files.map(file => (
        <tr className='file-list-item' key={ file.id }>
          <td className='file-name'>{ file.name }</td>
          <td className='file-type'>{ file.type }</td>
        </tr>
      )) }
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
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
    name: 'tests',
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
      message: 'Add a readme'
    }
  },
];
ReactDOM.render(<FileList files={ testFiles } />, document.querySelector('#root'))
