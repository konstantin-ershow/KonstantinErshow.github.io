function btnClickAnn()
        {
            
            let months = parseInt(document.form.months.value, 10);
            

            let percentStr = document.form.percent.value;
            count=0;

            
            percentStr = percentStr.replace(/,/,'.');
            
            let percent = parseFloat(percentStr, 10);
            if (percentStr=="" || percent == null || percent==0 || !percent) {
            	alert ("Введите процент или проверьте корректность ввода");
            }
            let creditSum = parseFloat(document.form.creditSum.value, 10)
          
            
            	//аннуитет
            	const plat = creditSum/months;
            	const percPerMonth = percent/(100*12);
            	const everyMonth = (creditSum * (percPerMonth)/(1-Math.pow((1+percPerMonth),-months)));
            	const resultDiv = document.getElementById("resultDiv");
            	resultDiv.innerHTML = '';
            	for (let i=0; i<months; i++) {
            		resultDiv.innerHTML +="<HR>"+ String(i+1)+
                " месяц: " + String(everyMonth.toFixed(2))+" переплата:"+String((everyMonth-plat).toFixed(2));
            	}
            	resultDiv.innerHTML +="<HR> Итого:" + String((everyMonth*months).toFixed(2));
            	resultDiv.innerHTML +="<HR> Переплата:" + String((everyMonth*months-creditSum).toFixed(2));
           
            	
            

            
        }

function btnClickDiff(){
	let months = parseInt(document.form.months.value, 10);
	let percentStr = (document.form.percent.value).replace(/,/,'.');

            let percent = parseFloat(percentStr, 10);
            let creditSum = parseFloat(document.form.creditSum.value, 10)
            
	//дифференцированный
	const resultDiv = document.getElementById("resultDiv");
            	resultDiv.innerHTML = '';
            	const platezj = creditSum/months;
            	let sum=0;
            	for (let i=0; i<months; i++) {
            		let montly = ((creditSum - platezj*i)*percent*31)/(365*100);
            		sum+=montly+platezj;

            		resultDiv.innerHTML +="<HR>"+ String(i+1)+
                " месяц: процентное " + String(montly.toFixed(2)) + " платеж="+String(platezj.toFixed(2))+" Итого за месяц:"+String((platezj+montly).toFixed(2));
            	}

            	resultDiv.innerHTML +="<HR> Переплата:" + String((sum-creditSum).toFixed(2));
            	resultDiv.innerHTML +="<HR> Итого:" + String((sum).toFixed(2));
}