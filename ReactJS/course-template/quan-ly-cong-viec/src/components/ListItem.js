import React from 'react'

class ListItem extends React.Component {
   onUpdateStatus = () => {
      this.props.onUpdateStatus(this.props.task.id)
   }

   onDelete = () => {
      this.props.onDelete(this.props.task.id)
   }

   onUpdate = () => {
      this.props.onUpdate(this.props.task.id)
   }

   render() {
      var {task, index} = this.props

      return (
         <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
               <span
                  className={task.status ? 'label label-success' : 'label label-danger'}
                  onClick={this.onUpdateStatus}
               >
                  {task.status ? 'Kích Hoạt' : 'Ẩn'}
               </span>
            </td>
            <td className="text-center">
               <button
                  type="button"
                  className="btn btn-warning"
                  onClick={this.onUpdate}
               >
                  <i className="far fa-edit"></i>&nbsp;
                  Sửa
               </button>&nbsp;
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.onDelete}
               >
                  <i className="fas fa-trash"></i>&nbsp;
                  Xóa
               </button>
            </td>
         </tr>
      )
   }
}

export default ListItem