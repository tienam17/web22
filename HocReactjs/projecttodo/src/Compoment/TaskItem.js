import React from 'react';

function TaskItem() {
  return (
        <tr>
            <td> 1 </td>
            <td> Học ReactJS bbbbbbbb </td>
            <td className="text-center">
                <span className="label label-danger"> Kích Hoạt </span>
            </td>
            <td className="text-center">
            <button type="button"className="btn btn-warning">
                <span className="fa fa-plus mr-5"> Sửa </span>
            </button>
            &nbsp;
            <button type="button"className="btn btn-danger">
                <span className="fa fa-trash mr-5"></span> Xoá
            </button>
            </td>
        </tr>
    );
}

export default TaskItem;