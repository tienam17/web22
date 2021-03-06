import React from 'react';


function TaskForm() {
  return (
    <div className="panel panel-warning">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Thêm Công Việc 
                    <span
                      className="fa fa-times-circle text-right"
                    ></span> 
                  </h3>
                </div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label> Họ Và Tên :</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <label> Trang Thái :</label>
                    <select
                       className="form-control"
                       name="status"
                    >
                      <option value={true}> Kích Hoạt </option>
                      <option value={false}> Ẩn </option>
                    </select><br/>
                    <div className="text-center">
                      <button type="submit"className="btn btn-warning">
                        <span className="fa fa-plus mr-5"></span> Lưu Lại
                      </button>&nbsp;
                      <button type="button"className="btn btn-danger">
                        <span className="fa fa-close mr-5"></span> Huỷ Bỏ
                      </button>
                    </div>
                  </form>
                </div>
            </div>
    
  );
}

export default TaskForm;
