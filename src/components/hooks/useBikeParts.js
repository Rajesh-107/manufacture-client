import { useEffect, useState } from "react";

const useBikeParts = () => {
    const [bikeParts, setbikeParts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/bikeparts")
        .then((res) => res.json())
        .then((data) => setbikeParts(data));
    }, []);
    return [bikeParts]
}
export default useBikeParts;