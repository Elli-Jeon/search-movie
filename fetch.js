const fetchData = async (keyword) => {
    let url = `https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json?query=\"${keyword}\"`;
    let requestOptions = {
        method : "GET",
        headers : {
            "X-Naver-Client-Id" : "bBIbdz0P823GUIwYl0pt",
            "X-Naver-Client-Secret" : "80xY_ibK5k"
        }
    };
    try{
        let response = await fetch(url,requestOptions);
        let data = await response.json();
        console.log(data.items);
    }catch(error){
        throw new Error(error);
    } 
}

fetchData("해리포터");

