import { courses } from "../../../data/education"
import { Boton } from "../../layouts/Boton"
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const EducationCards = (  ) => {

    const [ noOfElement, setNoOfElement ] = useState(2);
    const slice = courses.slice(0, noOfElement);

    const handleLoadMore = () => {
        setNoOfElement( noOfElement + 2 );
        
    }
    return (
        <section className="education">
            <div className="box-container" >
                {slice.map(( course, i ) =>
                <div className='box' key={ i }>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faGraduationCap}/>
                    </div>
                    <span>{ course.date } { course.academy }</span>
                    <h2>{ course.title }</h2>
                    <p>{ course.description }</p>
                    <h3>Profesor: <span>{ course.teacher }</span></h3>
                </div>
                )}
            </div>
            <div className="btn-load">
                <Boton
                        titleI="Mostrar Más"
                        className="btn-general"
                        handleclick={ handleLoadMore } 
                />
            </div>
            
        </section>
    )
}
