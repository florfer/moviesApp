const transformDescription= description => {
    let desc = description;
    if(description.length > 150){
        desc = description.substring(0, 150) + "...";
    }
    return desc;
};

export default transformDescription;