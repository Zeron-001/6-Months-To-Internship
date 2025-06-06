

function List(props){

    const category = props.category
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}
                                            </li>);
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol>{listItems}</ol>
        </>
    )
}

export default List