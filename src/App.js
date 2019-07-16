import React,{Component} from 'react';


class TodoList extends Component{
 constructor(props){
   super(props);
   this.state ={
     todos:[],
     currentToDo:"",
   };
     this.addItem = this.addItem.bind(this);

 }

 handleChange = event =>{
   console.log(event.target.value)
   this.setState({
     currentToDo:event.target.value

   })
 };

 addItem = event =>{
   event.preventDefault();
   console.log("addItem Method fired")
   if (this.state.currentToDo !==""){
     this.setState({
       currentToDo:"", 
       todos:[...this.state.todos,this.state.currentToDo]
      

     })
   }
 };







  render(){
    return(
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input ref={(a) => this._inputElement= a}  onChange={this.handleChange} name="taskName"type="text"placeholder="Add to do here!"/>
          <button type="submit">Add Task</button>
        </form>
       {/* <TodoItems entries={this.state.items}
                delete={this.deleteItem}/> */}
      </div>
    );
  }
}
export default TodoList;