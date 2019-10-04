  const transformData = premier => {
    const vec = premier.split("-");
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    var selectedMonthName = months[vec[1]-1];
    return (premier = vec[2] + " " + selectedMonthName + " " + vec[0]);
};

export default transformData; 