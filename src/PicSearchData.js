const PicSearchData = (foundPic, foundID) => {
    let receiveData = [];

    for (var i = 0; i < foundPic.length; i++) {
        const foundData = [
            {
                img: foundPic[i],
                title: foundID[i],
                timestamp: '',
            }
        ];
        foundData.forEach(item => receiveData.push(item));
    }

    return receiveData;
}

export {PicSearchData}