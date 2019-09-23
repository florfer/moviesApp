const transformDescription= description => {
    let desc = description;
    if(description.length > 200){
        desc = description.substring(0, 200) + "...";
    }
    return desc;
};

export default transformDescription;