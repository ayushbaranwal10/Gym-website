import React from 'react'
import '../../Styles/Exercise.css'
import buble from '../../asset/buuble.png'
import yoga from '../../asset/yoga.png'
import running from '../../asset/running.png'

const Exercise = () => {
  return (
   <section id="schedule">
    <div className="container exercise_container">
        <div className="exercise_top">
            <div className="section_tittle">
                <h2>
                   Benifits of <span className='highlights'>Exercise</span>
                    </h2>
                   <p>Regular gym attendance offers numerous benefits, including improved physical fitness and cardiovascular health. It helps manage weight, reduces stress, and boosts self-confidence through increased muscle strength and better posture. Additionally, gym-goers often enjoy enhanced mental well-being, increased energy levels, and opportunities for social interaction, creating a holistic approach to overall wellness.</p>
                   </div>
        </div>


        <div className="exercise_wrapper">
            <div className="exercise_item">
               <span className="exercise_icon">
                <img src={running} alt="" />
               </span>
               <div className="exercise_content">
                <h4>Better Mental Health:</h4>
                <p>Stress Reduction: Exercise triggers the release of endorphins, which reduce stress and improve mood.
Anxiety and Depression: Regular physical activity can alleviate symptoms of anxiety and depression and boost self-esteem.
Cognitive Function: Exercise supports cognitive function, including memory and concentration.
                </p>
               </div>
            </div>

            <div className="exercise_item">
               <span className="exercise_icon">
                <img src={yoga} alt="" />
               </span>
               <div className="exercise_content">
                <h4>Improved Physical Health:

</h4>
                <p>Weight Management: Exercise helps control body weight by burning calories and building muscle.
Cardiovascular Health: It improves heart and lung function, reducing the risk of heart disease.
Stronger Muscles and Bones: Regular exercise promotes muscle and bone health, reducing the risk of osteoporosis and fractures.
                </p>
               </div>
            </div>


            <div className="exercise_item">
               <span className="exercise_icon">
                <img src={buble} alt="" />
               </span>
               <div className="exercise_content">
                <h4>Disease Prevention:</h4>
                <p>Exercise lowers the risk of various chronic diseases, including type 2 diabetes, certain cancers, and metabolic syndrome.
Improved Immune Function:

Regular, moderate exercise can boost the immune system, making the body more resilient to illnessess
                </p>
               </div>
            </div>

        </div>
    </div>
   </section>
  )
}

export default Exercise