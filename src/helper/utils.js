export const generateArrayOfYears = (startYear = 1990) => {
    let currentYear = new Date().getFullYear(), years = [];
    while ( startYear <= currentYear ) {
        years.push(startYear++);
        
    }   
    return years;
};
