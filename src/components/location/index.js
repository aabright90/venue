import React from 'react'

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.807008361133!2d-84.51196386678983!3d39.13219152398287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884051b1de3821f9%3A0x69fb7e8be4c09317!2sCincinnati%2C%20OH!5e0!3m2!1sen!2sus!4v1627422161790!5m2!1sen!2sus" 
            width="100%" 
            height="500px" 
            allowfullscreen 
            loading="lazy"
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Location