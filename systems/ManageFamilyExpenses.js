function ManageFamilyExpenses(objectExpenses){
    if(typeof objectExpenses !== "object" || !objectExpenses.hasOwnProperty('revenue') || !objectExpenses.hasOwnProperty('expenses')){
        throw new Error('Receita ou despesa inválida!');
    } 
    this.objectExpenses = objectExpenses;
    this.balance = 0;
    this.result = {};


    this.calculateBalance = function(){ 
        this.balance = (this.objectExpenses['revenue'].reduce((a, b) => a + b, 0)) - (this.objectExpenses['expenses'].reduce((a, b) => a + b, 0));
    }

    this.generateResult = function(){
        if(this.balance > 1){
            this.result = {
                    revenue: this.objectExpenses['revenue'],
                    expenses: this.objectExpenses['expenses'],
                    balance: this.balance, 
                    status: "POSITIVE"
                };
        }else{
            this.result = {
                revenue: this.objectExpenses['revenue'],
                expenses: this.objectExpenses['expenses'],
                balance: this.balance, 
                status: "NEGATIVE"
            };

        }
    }

    this.getBalance = () => this.result;
    
}

const family = new ManageFamilyExpenses({revenue: [1000, 200, 2000], expenses: [20033, 300, 100, 200, 300, 900]});
family.calculateBalance();
family.generateResult();
console.log(family.getBalance());