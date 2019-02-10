exports.handler = async(event) => {
    if (event === undefined) {
        /**
         * A Cloudwatch Rule has been created to keep lambda live. 
         * This rule triggers the current lambda function for every five minutes.
         */
        console.log('MyAccount Get Live');
    } else {
        let response = {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
            },
        };

        if (event.requestContext.resourcePath === '/individuals/{id}') {
            console.log('Info', 'Individual id is ');
            response.body = { "done": "ok1" };
        } else if (event.requestContext.resourcePath === '/individuals/{id}/transactions') {
            console.log('Info', 'Inside Get Transactions');
            response.body = { "done": "ok2" };
        } else if (event.requestContext.resourcePath === '/individuals/{id}/knowledgecommunities') {
            console.log('Info', 'Inside Get Transactions');
            response.body = { "done": "ok3" };
        }
        return response;
    }
};