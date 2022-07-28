import React, { Component } from 'react'  //React is a object and we destructure 'Component' from that

export class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      // tasks: [{ task: 'check mails', id: 1 }, { task: 'Read article', id: 2 }, { task: 'Complete HW', id: 3 }],
      tasks: [],
      currTask: ''
    }
  }

  handleChange = (e) =>{
    console.log(e.target.value)
    this.setState({
      currTask: e.target.value
    })
  }

  handleSubmit = () =>{
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
      currTask: ''
    })
  }

  handleDelete = (id) =>{
    let newArr = this.state.tasks.filter((taskObj) => {
      return taskObj.id != id 
    })
    this.setState({
      tasks: [...newArr]
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.currTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {
            this.state.tasks.map((taskObj) => (
              <li key={taskObj.id}>  {/* According to react, you have to provide a unique key to each child  */}
                <p>{taskObj.task}</p>
                <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
              </li>
            ))

            // // bind method for this 
            // this.state.tasks.map(function(taskObj){
            //   return(
            //   <li key={taskObj.id}>  {/* According to react, you have to provide a unique key to each child  */}
            //     <p>{taskObj.task}</p>
            //     <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
            //   </li>
            //   ).bind(this)
            // })
          }
        </ul>
      </div>

    )
  }
}

export default ToDo