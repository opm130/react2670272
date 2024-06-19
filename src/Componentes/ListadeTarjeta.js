import React from "react";
import Tarjeta from "./Tarjeta";

const Lista=({exercises})=>(
    <React.Fragment>
        {
                exercises.map((exercise)=>{
                    return(
                        <Tarjeta
                        key={exercise.id}
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
            />
                    )
                }
            )
            }
    </React.Fragment>
)

export default Lista