//UTC기준 날짜 출력 
const date = new Date();    //UTC(세계 표준시) 기준 날짜 출력 
const dateUTC = Date.UTC(
    date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),
    date.getUTCHours(),date.getUTCMinutes(),date,getUTCSecondes());

    console.log(new Date(dateUTC)); 