const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calculateBtn = document.querySelector('#calculate');
const bmiList = document.querySelector('.list');
const bmiForm = document.querySelector('form');

console.log(height);
console.log(weight);
console.log(calculateBtn);
console.log(bmiList);

const bmiStatesData = {
	"overThin": {
			"state": "過輕",
			"color": "藍色",
	},
	"normal": {
			"state": "正常",
			"color": "紅色",
	},
	"overWeight": {
			"state": "過重",
			"color": "澄色",
	},
	"mildFat": {
			"state": "輕度肥胖",
			"color": "黃色"
	},
	"moderateFat": {
			"state": "中度肥胖",
			"color": "黑色"
	},
	"severeFat": {
			"state": "重度肥胖",
			"color": "綠色"
	},
}

function bmiStateText(heightNum, weightNum, bmi, state, classColor){
	let str = `<div class="${classColor} border rounded p-5">你是${heightNum}公分，${weightNum}公斤，BMI 為 ${bmi} <br> 您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}</div>`;
	bmiList.innerHTML = `<div>${str}</div>`;
}

// 按下按鈕後計算
calculateBtn.addEventListener('click', calculate);

function calculate() {
	let heightNum = height.value;
	let weightNum = weight.value;
	console.log(heightNum, weightNum);
	let bmi = (weightNum / ((heightNum / 100) * (heightNum / 100))).toFixed(2);
	let state =''; 
	let classColor= '';

	if(bmi < 18.5){
		// overThin
		state = 'overThin'
		classColor ='blue'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (18.5 <= bmi && bmi < 24){
		// normal
		state = 'normal'
		classColor ='red'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (124 <= bmi && bmi < 27){
		// normal
		state = 'overWeight'
		classColor ='orange'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (27 <= bmi && bmi < 30){
		// normal
		state = 'mildFat'
		classColor ='yellow'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (30 <= bmi && bmi < 35){
		// normal
		state = 'moderateFat'
		classColor ='black'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (bmi > 35){
		// normal
		state = 'severeFat'
		classColor ='green'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else {
		bmiList.innerHTML = `<div>請輸入身高、體重</div>`;
	}
	console.log(bmi);
	// bmiList.innerHTML = `你的 BMI 為 ${bmi}`;
	form.reset(); // form 的重置方法
};

