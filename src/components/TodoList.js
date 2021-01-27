import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {
                    props.items.map((item,index) => 
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            {
               props.items.length > 0
               ? 
                <p>
                    <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={props.clearItems}>Notları Sil</button>
                </p>
               :
                <p className="alert alert-warning">
                Aşağıdan Not Ekleyebilirsiniz
                </p>      

            }
        </div>
    );
}

export default TodoList;