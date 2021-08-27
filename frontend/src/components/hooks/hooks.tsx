import { useState, useEffect } from "react";

export interface Assignment{
    assignment_id: number,
    assignment_title: string,
    assingment_date: string,
    assignment_progress: boolean
  }
  
const useFetch = (url: string) => {

    const [data, setData] = useState<Assignment[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchURL(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchURL();
    }, []);

    return [data, loading] as const;
}

export default useFetch;