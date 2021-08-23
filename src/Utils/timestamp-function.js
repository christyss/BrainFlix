function videoDate(rawTimestamp){
    const timestamp = new Date(rawTimestamp)

    const date ={
        day: timestamp.getDate(),
        month: timestamp.getMonth() + 1,
        year: timestamp.getFullYear()
    };

    if (date.day <= 9){
        date.day = "0" + date.day;
    }

    if (date.month <= 9){
        date.month = "0" + date.month;
    }

    return `${date.month}/${date.day}/${date.year}`
}


export default videoDate