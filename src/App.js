import React,{Component} from 'react';
import TaskList from "./TaskList";


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
 }


 deleteItem =(index,event) =>{
   console.log(event.target.id)
   const result =this.state.todos.filter((todo,index) => index !== event.target.id)
 
   this.setState({
     todos:result
   });
 
  }





  render(){
    console.log("console logging arrays of todos", this.state.todos)
    return(
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input  onChange={this.handleChange} name="taskName"type="text"placeholder="Add to do here!"/>
          <button type="submit">Add Task</button>
        </form>
        
        <TaskList todoArray={this.state.todos} deleteItem={this.deleteItem}/>
        
       </div>
    );
  }
}
export default TodoList;