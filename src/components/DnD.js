import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const postss = [
    {
        id: 1,
        title: 'hello, there',
        text: 'post no : 1'
    },    {
        id: 2,
        title: 'hello, there',
        text: 'post no : 2'
    },    {
        id: 3,
        title: 'hello, there',
        text: 'post no : 3'
    },    {
        id: 4,
        title: 'hello, there',
        text: 'post no : 4'
    }
]
const DnD = () => {
    const [posts, setPosts] = useState(postss)
    const handleDragEnd = (result) => {
        const items = Array.from(posts);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setPosts(items)
        console.log(result)
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='elements'>
                    {(provided) => (
                        <div className='elements' {...provided.droppableProps} ref={provided.innerRef} >
                            {posts.map(({ id, title, text }, index) => {
                                return (
                                    <Draggable key={id} draggableId={String(id)} index={index} >
                                        {(provided) => (
                                            <div className='drag' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                                                <h3>{ title }</h3>
                                                <p> { text }</p>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            { provided.placeholder }
                        </div>
                    )}
                </Droppable>
                <p>Hello</p>
            </DragDropContext>
            
        </div>
    )
};

export default DnD;
