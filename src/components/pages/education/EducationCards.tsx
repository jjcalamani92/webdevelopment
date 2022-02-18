import { courses } from "../../../data/education"
import { Boton } from "../../layouts/Boton"

export const EducationCards = (  ) => {

    const handleCourse = () => {
        console.log('hello');
        
    }
    return (
        <section className="education">
            <div className="box-container" >
                {courses.map(( course, i ) =>
                <div className='box' key={ i }>
                    <div className='icon'>
                        <i className='fas fa-graduation-cap'></i>
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
                        handleclick={ handleCourse } 
                />
            </div>
            
        </section>
    )
}
