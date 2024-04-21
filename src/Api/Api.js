import axios from 'axios';

const sendCodeToAzureFunction = async (code) => {
    try {
        const response = await axios.post(
            'https://myb2bwebapp.azurewebsites.net/api/authLoginCode',
            { code: code }, 
        );
        console.log(response.data); 
        return response

    } catch (error) {
        console.error('Error sending code to Azure Function:', error);
        return error.response.data
    }
};

export { sendCodeToAzureFunction };
