import React from "react"
import data from "../data"
import Card from "../Components/Card"
import '../App.css'

function Tasks() {

    const cards = data.map(item => {
        return(
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            time={item.time}
            author={item.author}
          />
        )
      })

    return(
        <div className="Content">
            <div className="TaskContainer">
                {cards}                
            </div>
        </div>
    )
}

export default Tasks