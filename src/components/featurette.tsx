import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Featurette: React.FC = () => {
    const { qualification, winderAdvert, summerAdvert } = useStaticQuery(
        graphql`
          query FeatureImageData {
            qualification: allFile(filter: {relativeDirectory: {eq: "featurette"}, name: {in: ["feature-qualifications", "feature-qualifications-002"]}}) {
                edges {
                    node {
                        id
                        base
                        publicURL
                        childrenImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                }
            }
            winderAdvert: allFile(filter: {relativeDirectory: {eq: "featurette"}, name: {in: ["feature-winter-advert-500x500"]}}) {
                edges {
                    node {
                        id
                        base
                        publicURL
                        childrenImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                }
            }
            summerAdvert: allFile(filter: {relativeDirectory: {eq: "featurette"}, name: {in: ["feature-summer-advert-500x500"]}}) {
                edges {
                    node {
                        id
                        base
                        publicURL
                        childrenImageSharp {
                            gatsbyImageData(quality: 100)
                        }
                    }
                }
            }
          }
        `)    

    return (
        <>
        <div className="container marketing">
            <div className="row featurette">
                <div className="col-md-12 order-md-1">
                    <h2 className="fw-normal lh-1">DISCOVER THE BENEFITS OF A <span
                            className="text-body-secondary">BIOKINETICIST</span></h2>
                    
                    A Biokineticist is an exercise specialist who focuses on promoting optimal health and well-being through exercise-based interventions. We aim to assess, treat, and prevent various medical conditions and injuries. 

                    <h5 className="featurette-sub-heading">Injury rehabilitation:</h5>
                    A Biokineticist can design an individualized training program to help regain strength, mobility, and function after you have suffered a sport-related injury or an orthopedic procedure. 

                    <h5 className="featurette-sub-heading">Physical performance:</h5>
                    A Biokineticist will help you reach peak performance. We provide expert guidance on sport strength and conditioning, endurance training, flexibility, and injury prevention for most to all sport types, individual or team sports do not matter if you are in primary school, high school, university, an adult, or a professional athlete. 

                    <h5 className="featurette-sub-heading">Optimal health:</h5>
                    We have a very important role in improving physical health. We promote physical health by thoroughly assessing the body composition while focusing on aspects such as BMI, Fat %, Muscle mass, circumference, and metabolism. A Biokineticist does a screening of blood pressure, glucose, and sugar levels. We do wellness coaching where we guide and advise the patient on how to have healthy lifestyle habits and promote overall wellbeing. 

                    <h5 className="featurette-sub-heading">Chronic disease management:</h5>
                    A Biokineticist can help manage and improve chronic disease symptoms, enhance the quality of life, and reduce the risk of complications. We are specialists in cardiovascular disease, respiratory disease, metabolic diseases such as obesity and diabetes, Inflammatory diseases such as arthritis, and neurological and mental conditions. 

                    <h5 className="featurette-sub-heading">Special population treatments:</h5>
                    A Biokineticist aims to improve acts of daily living, and physical functioning and enhance the quality of life of children, geriatric, disabled, impaired, pre and post-natal through exercise interventions and specialized knowledge and skills. 

                    <h5 className="featurette-sub-heading">What to expect during your Biokineticist appointment</h5>
                    During your first appointment, the Biokineticist will conduct a thorough physical assessment to determine individual needs and goals. We start by asking about your medical history, assess your posture, conduct physical testing, and discuss lifestyle habits and exercise preferences. Based on the information gathered we then develop your personalized exercise program that meets your needs. Regular follow-up sessions are booked to allow the Biokineticist to follow your progression, make necessary adjustments, and provide proper technique and form to prevent further injuries.
                </div>
            </div>
        </div>

        <div className="container marketing">
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="fw-normal lh-1">JANUARY <span
                            className="text-body-secondary">SUMMER BEACH PROMOTION</span></h2>
                    <p className="lead">For Only R580.00</p>
                    <p>
                        <ul>
                            <li>Initial evaluation and 1 re-evaluation on week 4 to ensure progress (BMI, Body fat %, Physical Fitness)</li>
                            <li>Once off health screening (Blood pressure, glucose & cholesterol)</li>
                            <li>Two +-45 minute exercise sessions per week under Biokineticist supervision</li>
                            <li>3-4 x per week home exercise program</li>
                            <li>Lifestyle & diet guidance</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-5 order-md-1">
                    {summerAdvert.edges.map(({node}:any) => (
                        <GatsbyImage image={node.childrenImageSharp[0].gatsbyImageData}
                            alt={node.base}
                            key={node.id}
                            className="featurette-image img-fluid mx-auto" />
                    ))}

                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="fw-normal lh-1">AUGUST <span
                            className="text-body-secondary">WINTER FAT PROMOTION</span></h2>
                    <p className="lead">For Only R580.00</p>
                    <ul>
                        <li>Initial evaluation and 1 re-evaluation on week 4 to ensure progress (BMI, Body fat %, Physical Fitness)</li>
                        <li>Once off health screening (Blood pressure, glucose & cholesterol)</li>
                        <li>Two +-45 minute exercise sessions per week under Biokineticist supervision</li>
                        <li>3-4 x per week home exercise program</li>
                        <li>Lifestyle & diet guidance</li>
                    </ul>
                </div>
                <div className="col-md-5">
                    {winderAdvert.edges.map(({node}:any) => (
                        <GatsbyImage image={node.childrenImageSharp[0].gatsbyImageData}
                            alt={node.base}
                            key={node.id}
                            className="featurette-image img-fluid mx-auto" />
                    ))}
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7  order-md-2">
                    <h2 className="fw-normal lh-1">MONIQUE STRYDOM <span
                            className="text-body-secondary">Qualifications</span></h2>
                    <h5 className="featurette-sub-heading">Physical Health</h5>
                    Wellness Coaching, Physical Health Promotion & Preventative Treatment. Full Body Assessment (Including BMI and Body Fat Percentage), Health screenings and lifestyle management

                    <h5 className="featurette-sub-heading">Sport Performance</h5> 
                    Sport Injury Rehabilitation, Sport Specific Training & Conditioning, Injury Prevention & Muscular Imbalance Rehabilitation. 

                    <h5 className="featurette-sub-heading">Chronic Conditions</h5>
                    Cardiac & Stroke Rehabilitation, Arthritis/Osteoporosis Rehabilitation, Obesity/ Weight Management, elevated glucose and cholesterol levels, Pulmonary disorders, Neurological & mental conditions etc. 

                    <h5 className="featurette-sub-heading">Orthopaedics</h5>
                    Clinical Assessment, Musculoskeletal Rehabilitation, Postural Deformities, Pre & Post Operative Final Phase Rehabilitation, Chronic pain condition

                    <h5 className="featurette-sub-heading">Special population</h5>
                    Children, Geriatric, disabled and impaired, pre and post natal, general population

                    <h5 className="featurette-sub-heading">Other</h5>
                    Pilates, Weight Loss Programs, Rebound
                </div>
                <div className="col-md-5">
                    {qualification.edges.map(({node}:any) => (
                        <GatsbyImage image={node.childrenImageSharp[0].gatsbyImageData}
                            alt={node.base}
                            key={node.id}
                            className="featurette-image img-fluid mx-auto" />
                    ))}
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.9594530317604!2d29.213647712560743!3d-25.870811877188807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaed45bd247d3d%3A0xcb21a966ccc74c98!2sHo%C3%ABrskool%20Generaal%20Hertzog!5e0!3m2!1sen!2sza!4v1705151163444!5m2!1sen!2sza" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}

export default Featurette