import * as React from "react"

const Featurette: React.FC = () => {
    return (
        <>
        <div className="container marketing">
            <div className="row featurette">
                <div className="col-md-12 order-md-1">
                    <h2 className="fw-normal lh-1">WHAT IS A  <span
                            className="text-body-secondary">BIOKINETICIST</span></h2>
                    <p className="lead">A biokineticist is a clinical exercise specialist who: -</p>
                    <p>
                        <ul>
                            <li>Primary function is to improve physical function & health care through exercise as a modality</li>
                            <li>Improve a person's physical well-being and quality of life through individualised scientific assessment</li>
                            <li>Orthopedic rehabilitation, injury prevention, chronic disease maintenance, performance enhancement (sport & work), and pre/post operative rehabilitation</li>
                            <li>Evaluate & measure: 
                                <ul>
                                    <li>body posture</li>
                                    <li>body composition</li>
                                    <li>blood pressure</li>
                                    <li>glucose level</li>
                                    <li>lung function</li>
                                    <li>heart rate</li>
                                    <li>fitness</li>
                                    <li>muscle strength</li>
                                    <li>endurance</li>
                                    <li>power</li>
                                    <li>flexibility</li>
                                    <li>and other health screenings</li>
                                </ul></li>
                            <li>Final phase rehabilitation</li>
                        </ul>
                    </p>
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
                    <img src="assets/jpg/what_is_biokineticist.jpg" alt="What is a biokineticist" className="featurette-image img-fluid mx-auto" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="fw-normal lh-1">AUGUST <span
                            className="text-body-secondary">WINTER FAT PROMOTION</span></h2>
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
                <div className="col-md-5">
                    <img src="assets/jpg/advert_500x500.jpg" alt="August Winter Promotion" className="featurette-image img-fluid mx-auto" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span
                            className="text-body-secondary">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of
                        how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src="assets/jpg/what_is_biokineticist.jpg" alt="What is a biokineticist" className="featurette-image img-fluid mx-auto" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span
                            className="text-body-secondary">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not
                        really intended to be actually read, simply here to give you a better view of what this would
                        look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                        height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%"
                            fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
                    </svg>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7664640297667!2d28.223469811903097!3d-26.041196157261613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956b6d81709e33%3A0x6c785f574e8e2df7!2s9%20Brendon%20St%2C%20Birchleigh%20North%2C%20Kempton%20Park%2C%201618!5e0!3m2!1sen!2sza!4v1692299343537!5m2!1sen!2sza" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}

export default Featurette