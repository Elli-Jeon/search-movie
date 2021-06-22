const fetchData = async (keyword) => {
    let url = new URL(`https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json`);
    let params = {
        query : `${keyword}`,
        display : 100,
        // genre : [1,2],
    }
    let requestOptions = {
        method : "GET",
        headers : {
            "X-Naver-Client-Id" : "bBIbdz0P823GUIwYl0pt",
            "X-Naver-Client-Secret" : "80xY_ibK5k"
        }
    };
    url.search = new URLSearchParams(params).toString();
    try{
        let response = await fetch(url,requestOptions);
        let data = await response.json();
        console.log(data.items);
    }catch(error){
        throw new Error(error);
    } 
}

fetchData("해리포터");

