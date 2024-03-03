import { useEffect, useState } from "react";


const Test = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second (1000 milliseconds)
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect will run once on mount

    // The rest of your component logic...
    return (
       
    
       
            <div>
                <p>Current Date and Time: {currentDateTime.toLocaleString()}</p>
               
            </div>

    );
};

export default Test;