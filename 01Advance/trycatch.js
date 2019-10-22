const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64;
    }else{
        throw Error(`Amount - ${dollar} needs to be in number!`);
    }
};

try{
    const myValues1 = convertToRs(5);
    const myValues2 = convertToRs('5');
    const myValues3 = convertToRs('five');
    console.log(myValues2)
}catch (e) {
    console.log(e);
}

console.log('I Will Not Run if program crashes!');
// const myValues1 = convertToRs(5);
// console.log(myValues1);
//
// const myValues2 = convertToRs('5');
// console.log(myValues2);
//
// const myValues3 = convertToRs('five');
// console.log(myValues3);