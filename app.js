const finalGrade = (a,b,c) =>{
  if ( a < 0 || a > 100 ) {
    return 'You have entered an invalid grade.';
  }else if( b < 0 || b > 100 ) {
    return 'You have entered an invalid grade.';
  }else if( c < 0 || c > 100 ) {
    return 'You have entered an invalid grade.';
  }
  let result = Number(a+b+c) / 3;
  if ( result >= 0 && result <=59 ){
    return 'F';
  }else if( result >= 60 && result <= 69 ){
    return 'D';
  }else if( result >= 70 && result <= 79 ){
    return 'C';
  }else if( result >= 80 && result <= 89 ){
    return 'B';
  }else if( result >= 90 && result <= 100 ){
    return 'A';
  }
}
console.log(finalGrade(34,627,90));










