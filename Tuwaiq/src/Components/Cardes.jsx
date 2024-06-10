import './Cardes.css';

const Cardes = ({ type, description, location, duration, startDate }) => {
    const currentDate = new Date();
    const cardDate = new Date(startDate);
    const isExpired = cardDate < currentDate;

    let cardColor;
    if (type === 'برنامج') {
        cardColor = ' #a3e635'; 
        
    } else if (type === 'معسكر') {
        cardColor = '#4e3797'; 
    } else if (type === 'لقاء') {
        cardColor = '#ffccd5'; 
    } else {
        cardColor = '#ffffff'; 
    }

    return (
        <>
            <div className="card" style={{ borderRightColor: isExpired ? '#ccc' : cardColor }}>
                <div className="card-type" >
                    {type}
                </div>
                <div className="card-content">
                    <p>{description}</p>
                    <div className="icon-text">
                        <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="Location Icon" />
                        <span>{location}</span>
                    </div>
                    <div className="icon-text">
                        <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="Duration Icon" />
                        <span>{duration}</span>
                    </div>
                    <div className="icon-text">
                        <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="Calendar Icon" />
                        <span>يبدأ في {startDate}</span>
                    </div>
                    <button className="details-button" disabled={isExpired} style={{ backgroundColor: isExpired ? '#ccc' : 'white', cursor: isExpired ? 'not-allowed' : 'pointer' }}>
                        التفاصيل
                    </button>
                </div>
            </div>



        </>
    );
}

export default Cardes;



