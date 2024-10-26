import React, { useState } from "react";

const useSendEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    const sendEmail = async (body) => {
        setLoading(true);

        try {
            const request = await fetch("/v1/send-email", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(body)
            });

            console.log(request)
    
            if(!request.ok) throw Error("Something went wrong");
            
            const response = await request.json();
    
            if(response.error) throw Error(response.error);
            
            setLoading(false);

            if(response.success) 
                return response;

        } catch (error) {
            setError(error.message);
        }
    };

    return {error, loading, sendEmail};
};

export default useSendEmail;