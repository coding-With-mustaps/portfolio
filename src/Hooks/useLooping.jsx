import { useEffect, useState } from "react";



const useLooping = (arr) =>  {

   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect( () => {

    const incrementIndex = setInterval( () => {
        setCurrentIndex( (preIndex) => (preIndex + 1) % arr.length)
    }, 5000)

    return () => clearInterval(incrementIndex);

   }, []);

   return { currentIndex };
};

export default useLooping;