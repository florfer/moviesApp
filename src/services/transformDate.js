import { 
    JANUARY, 
    FEBRUARY, 
    MARCH, 
    APRIL, 
    MAY, 
    JUNE, 
    JULY, 
    AUGUST, 
    SEPTEMBER, 
    OCTOBER, 
    NOVEMBER, 
    DECEMBER 
} from './../constants/months';

  const transformData = premier => {
    const vec = premier.split("-");
    let month = "";
    switch (vec[1]){
        case "01":  month = JANUARY;
                    break;
        case "02":  month = FEBRUARY;
                    break;
        case "03":  month = MARCH;
                    break;
        case "04":  month = APRIL;
                    break;
        case "05":  month = MAY;
                    break;
        case "06":  month = JUNE;
                    break;
        case "07":  month = JULY;
                    break;
        case "08":  month = AUGUST;
                    break;
        case "09":  month = SEPTEMBER;
                    break;
        case "10":  month = OCTOBER;
                    break;
        case "11":  month = NOVEMBER;
                    break;
        case "12":  month = DECEMBER;
                    break;
        default: month = "";
                    break;
    }
    return (premier = vec[2] + " " + month + " " + vec[0]);
};

export default transformData; 