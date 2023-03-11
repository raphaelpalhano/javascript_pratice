function GradesConversor(name, gradeOne, gradeTwo){
    if(typeof gradeOne !== "number" && typeof  gradeTwo !== "number" || gradeOne < 0 &&  gradeTwo < 0 ){
        throw new Error('Nota inválida!');
    } 
    this.name = name;
    this.gradeOne = gradeOne;
    this.gradeTwo = gradeTwo;
    this.finalGrade = 0;
    this.score = {};


    this.calculate = function(){
        
        this.finalGrade = (this.gradeOne + this.gradeTwo) / 2;
        let scoreA = this.finalGrade >= 9.5
        let scoreB = this.finalGrade >= 8 && this.finalGrade < 9.5;
        let scoreC = this.finalGrade >= 5 && this.finalGrade < 8;
        if(scoreA){
            this.score = {name: this.name, nota: 'A'};
        }else if(scoreB){
            this.score = {name: this.name, nota: 'B'};
        }else if(scoreC){
            this.score = {name: this.name, nota: 'C'};
        }else{
            this.score = {name: this.name, nota: 'D'};
        }
    }

    this.getScore = () => this.score;
}

try{
    const student = new GradesConversor('Victor', 10, 8);
    student.calculate()
    console.log(student.getScore())
}catch(err){
    console.log(err.message);
}
