const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calculateBtn = document.querySelector('#calculate');
const bmiList = document.querySelector('.list');
const bmiForm = document.querySelector('form');
const clearBtn = document.querySelector('#clearBtn');

console.log(height);
console.log(weight);
console.log(calculateBtn);
console.log(bmiList);
console.log(clearBtn);

let historyBmiData = [];

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



function bmiStateText(heightNum, weightNum, bmi, state, classColor) {
	let time = new Date();
	let date = new Date(time);
	let dateStr = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

	console.log("Date:", dateStr);
	// let str = `<div class="${classColor} border rounded p-5 mb-2">你是${heightNum}公分，${weightNum}公斤，BMI 為 ${bmi} <br> 您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}</div>`;
	let content =
		`<div class="card mb-3">
		<div class="row  g-0">
			<div class="col-md-4 ">
						<?xml version="1.0" ?><svg id="图层_1" version="1.1" viewBox="0 0 4000 4000" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style>.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#ffebe2}.st1{fill:#afc6f8}.st1,.st2,.st3,.st4,.st7,.st9{fill-rule:evenodd;clip-rule:evenodd}.st2{stroke:#24245b;stroke-width:4.1667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:12.5;fill:#24245b}.st3,.st4,.st7,.st9{fill:#c57dba}.st4,.st7,.st9{fill:#efc2e9}.st7,.st9{fill:#24245b}.st9{fill:#f99382}.st10{fill:none;stroke:#24245b;stroke-width:4.1667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:12.5}</style><g id="图层3"><path class="st0" d="M2593.6 2571c15 30.8 51.3 44.7 83 31.8 81.4-33.2 230.7-94.1 310.4-126.6 30.5-12.4 46.8-45.6 38.1-77.4-68.8-250.9-350.6-1277.6-427.1-1556.6-4.9-17.9-17.2-32.8-33.8-41s-35.9-9-53.1-2.1c-138.2 55.5-451.4 181.4-587.1 235.9-16.7 6.7-29.9 20.1-36.4 36.9-6.5 16.8-5.7 35.6 2.2 51.8 123.7 254.6 587.4 1208 703.8 1447.3z"/><path class="st1" d="M2103.2 3040.2c21.4 26.7 59.9 32.3 88 12.6 90.2-63 279.1-195 367.3-256.7 27-18.8 35.6-54.9 20.1-83.9-142.8-267.4-805.9-1509-964.9-1806.8-8.7-16.3-24-28.2-42-32.5-18-4.4-37-.8-52.3 9.7-148.8 102.8-533.3 368.6-679.2 469.4-14.8 10.3-24.8 26.2-27.4 44.1-2.6 17.8 2.3 36 13.6 50 206.4 257.7 1083 1352.1 1276.8 1594.1z"/><path class="st2" d="M1750.7 1868.3c-15.3 13.1-38 60.6 50.6 174.1l98.1 33.8 93.6-147.7-182-99.6c-.1 0-45 26.3-60.3 39.4z"/><path class="st3" d="M637.1 2024c13.1-14.5 102 15.8 182.3 87.9 80.3 72.2 121.7 159.1 108.6 173.6-13.1 14.6-88.9-32.3-169.2-104.4-80.2-72.1-134.7-142.5-121.7-157.1z"/><path class="st4" d="M2494.9 2858.2s66 45.9 94 76.7c38 41.9-2.8 264.3-46.6 267.7-43.8 3.4-233.5 0-233.5 0s-5.1-97.2 111.7-106.3v-129.7l74.4-108.4z"/><defs><path d="M2494.9 2858.2s66 45.9 94 76.7c38 41.9-2.8 264.3-46.6 267.7-43.8 3.4-233.5 0-233.5 0s-5.1-97.2 111.7-106.3v-129.7l74.4-108.4z" id="SVGID_1_"/></defs><clipPath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_1_"/></clipPath><g clip-path="url(#SVGID_2_)"><path class="st3" d="M2420.5 3096.4s33.6-3.7 86.3 4.5c0 0-12.6-27.6-86.3-26.2-10.7 6.5-12 13.6 0 21.7zM2510 2869s5.8 99.3-98 140.9l-14.7-74.9 97.6-94.4 15.1 28.4z"/></g><path class="st0" d="M1953.3 1930.5s-41.1 50.9-75.1 104.1c0 0-322.9-118.5-431.8-106.1-109 12.4-453.3 115.1-453.3 115.1l47.2 192.2 406.1-95.2s426 172.4 474.1 199.5c48 27.1 85.3 15.3 85.3 15.3l135.6-320.9-188.1-104z"/><defs><path d="M1953.3 1930.5s-41.1 50.9-75.1 104.1c0 0-322.9-118.5-431.8-106.1-109 12.4-453.3 115.1-453.3 115.1l47.2 192.2 406.1-95.2s426 172.4 474.1 199.5c48 27.1 85.3 15.3 85.3 15.3l135.6-320.9-188.1-104z" id="SVGID_3_"/></defs><clipPath id="SVGID_4_"><use overflow="visible" xlink:href="#SVGID_3_"/></clipPath><g clip-path="url(#SVGID_4_)"><path class="st7" d="M1915.7 2165s-29.4 77.6-40.1 154.1l-11 44.4h119.2l-68.1-198.5z"/></g><path class="st0" d="M1920.4 2076.2s-28.4 469.8 0 549.9c28.4 80.1 466.2 364.9 466.2 364.9s116.2-23.4 120.2-142.9l-348.2-319 107.7-447.5-300.6-110-45.3 104.6z"/><path class="st7" d="M1847.5 1996.1c66.3-12.3 113.3 62.6 214.6 106 134 57.4 211.6 22.4 224.5 15.8l-18-116.9-361.9-119.8c0 .1-141.8 130.2-59.2 114.9zM993.5 2043.5c12.2-3 32.7 37.7 45.7 90.7 13 53.1 13.6 98.6 1.3 101.6-12.2 3-32.7-37.7-45.7-90.7s-13.5-98.7-1.3-101.6z"/><path class="st4" d="M1028.3 2228c-48.4 27.3-93.7 54-101.4 58.6l1.2-1c13.1-14.5-41.5-85-121.8-157.2-79.8-71.7-155.1-118.4-168.9-104.7 90.2-115.6 279.1 57.7 279.1 57.7l96.5-19.3c9.3 16.4 19 42.2 26.3 72 8.1 33.2 11.4 63.5 9.7 82.2l-20.7 11.7z"/><defs><path d="M1028.3 2228c-48.4 27.3-93.7 54-101.4 58.6l1.2-1c13.1-14.5-41.5-85-121.8-157.2-79.8-71.7-155.1-118.4-168.9-104.7 90.2-115.6 279.1 57.7 279.1 57.7l96.5-19.3c9.3 16.4 19 42.2 26.3 72 8.1 33.2 11.4 63.5 9.7 82.2l-20.7 11.7z" id="SVGID_5_"/></defs><clipPath id="SVGID_6_"><use overflow="visible" xlink:href="#SVGID_5_"/></clipPath><g clip-path="url(#SVGID_6_)"><path class="st3" d="M916.5 2081.5s13.7 12.6 28.1 30.4c0 0-.5-21.4-19.9-43.9l-8.2 13.5zM1003.3 2064.1c14.6-.5 34.1 137.8 13.8 170.2l27 18.7 38.4-37.1-48.8-173.6c0 .1-41.3 22.2-30.4 21.8z"/></g><path class="st9" d="M1720.9 1366.2s-15.7-26.6-34.9-37.7-34.5-32.4-37.5-46c-3-13.5-32.7-17.8-33.1 15.2-.5 33.1 11.2 36 11.2 36s-28.4 1.6-59.3 15.1c0 0-83.3-.4-116 17.3-16.1 8.7-13.6 21-4.9 25.6.5.2-8 14.9 26.4 18.1-14.7 15.5 12.8 22.1 45.2 2.5 0 0 63.2 4.6 123.9 27.2l79-73.3z"/><path class="st10" d="M1591.5 1348.9h-24.2M1517.9 1412.4s-19.4-2.4-45.2-2.5M1655.7 1369.9s-57.5-31.8-88 3.8c0 0-116.8-12.1-121.3 18"/><path class="st2" d="M3134.2 1420.8c13.3 2.9 16.1 42 6.2 87.2-9.8 45.2-28.6 79.6-41.9 76.7-13.3-2.9-16.1-42-6.2-87.2 9.9-45.2 28.6-79.6 41.9-76.7z"/><path class="st9" d="M3091.4 1435s35.6-11.9 92 0c0 0 67.5-13 98.7-18.9 7.7-.6 23.8 36.6-29.6 48.6 0 0 21.8 9.2 37.8 23.1 0 0 77.4 22 74.3 47.8-1.6 13.3-15.4 9.3-15.4 9.3.6 12.3-2.2 24.1-24.3 20.6s-181.2-24.2-324.1 6.3l90.6-136.8"/><path clip-rule="evenodd" d="M3098.6 1584.7h.1c-21 1.9-234.7 22.9-621.9 138.4 0 0-98.3 185.5-179.6 388.8 0 0-152.7 58.3-305.3-95.1s-215.4-171.4-241.3-148.6c0 0 144.6-130.1 346-231.4l-445.4-181c-33.2-13.1 26.3-114.7 99.4-96.8l561.9 146.3 175.7-15.3s346.9-58.5 643.2-69.2c-13 2-29.9 34.7-39 76.8-9.9 45.2-7.1 84.2 6.2 87.1z" fill="#006cff" fill-rule="evenodd"/><defs><path d="M3098.6 1584.7h.1c-21 1.9-234.7 22.9-621.9 138.4 0 0-98.3 185.5-179.6 388.8 0 0-152.7 58.3-305.3-95.1s-215.4-171.4-241.3-148.6c0 0 144.6-130.1 346-231.4l-445.4-181c-33.2-13.1 26.3-114.7 99.4-96.8l561.9 146.3 175.7-15.3s346.9-58.5 643.2-69.2c-13 2-29.9 34.7-39 76.8-9.9 45.2-7.1 84.2 6.2 87.1z" id="SVGID_7_"/></defs><clipPath id="SVGID_8_"><use overflow="visible" xlink:href="#SVGID_7_"/></clipPath><g clip-path="url(#SVGID_8_)"><path class="st7" d="M2096.6 1636.9s36.1-17 61.9-26.3c0 0-50.9-2.1-96.4 12.3 0-.1 2.2 18.6 34.5 14z"/></g><path class="st10" d="M3290.2 1487.8c-22.4-6.6-44.5-11.6-66.3-15.3M3216.6 1456.3s19.8 1.5 35.9 8.4M3133.6 1480.1s40-12.6 78.5 16.9c0 0 135.6 19.4 136.9 47.8"/><path class="st9" d="M2518.9 1197.7s-65.8-2.5-119.9 57.9c0 0-55.2 13.2-46.1 33.6 3.5 7.9 11.8 13.5 11.8 13.5-17.7 27.2-41 98.2 21.3 118 0 0-33.4 46.3-78.8 90.1-50.8 49 107.3 13.5 181.2-20.7 0 0 25.8-53 39.3-69.4l94.9-67.4v-86.9l-103.7-68.7z"/><defs><path d="M2518.9 1197.7s-65.8-2.5-119.9 57.9c0 0-55.2 13.2-46.1 33.6 3.5 7.9 11.8 13.5 11.8 13.5-17.7 27.2-41 98.2 21.3 118 0 0-33.4 46.3-78.8 90.1-50.8 49 107.3 13.5 181.2-20.7 0 0 25.8-53 39.3-69.4l94.9-67.4v-86.9l-103.7-68.7z" id="SVGID_9_"/></defs><clipPath id="SVGID_10_"><use overflow="visible" xlink:href="#SVGID_9_"/></clipPath><g clip-path="url(#SVGID_10_)"><path class="st7" d="M2385.8 1420.6s22.1 4.7 46.3-.8c0 0-19.2 21.4-69.6 19.8l23.3-19z"/></g><path class="st7" d="M2538.7 1303.6s-25.7-25.6-3.3-66.9c0 0-14.7-32.2-47.1-33.2-4.4-.2-8.7.4-12.8 1.7-6.6 2.1-20.7 7.2-36.4 16.8-37.7-63.9 1.7-99.6 28.8-88.8 18.2 7.3 12.7 26.7 27.5 43.3 76.5-101.2 165.3-83.7 121-15.6-17.7 27.2 75.6-14.7 147.9 68.6 37.5 43.1 12.9 93.4-38.4 103.4-18.5 3.6-48.6-3-69.7 6 22.5 4.9 36 35.5 8.8 51.7-25 14.8-86.7 4.3-137.3 30 0 0-4.2-27.6 3.4-42.3 17.5 7 69.3-11.3 71.7-56 1.6-30.6-34.6-38.1-64.1-18.7z"/><path class="st10" d="M2570.4 1316.3s-18.1 8.4-28 36.9M2551.3 1334.7s13.2-4 25.1 4.2"/><path clip-rule="evenodd" d="M2371.6 1332.7s30.5 2.4 57.7-7.9c0 0 .8 38.3-34.1 37.7-24.5-.3-24.7-21.5-23.6-29.8z" fill="#fff" fill-rule="evenodd"/><path class="st10" d="M2465.4 1233.2s24.7 5.3 23.7 33.9"/><path class="st7" d="M2450.2 1252.1c3.3 3 2.3 9.4-2.2 14.2-4.5 4.9-10.7 6.4-14 3.5-3.3-3-2.3-9.4 2.2-14.2s10.8-6.5 14-3.5z"/><circle class="st0" cx="1394.6" cy="1527.5" r="25.9"/><circle class="st1" cx="3070.4" cy="1840.3" r="28"/><circle class="st0" cx="2933.9" cy="1234.8" r="24"/><circle class="st1" cx="2165.3" cy="841.2" r="22.9"/></g></svg>
			</div>
			<div class="col-md-8 d-flex align-items-center">
				<div class="card-body ">
					<p class="card-text ${classColor}">你是${heightNum}公分，${weightNum}公斤，BMI 為 ${bmi} <br> 您的體重${bmiStatesData[state].state}，健康指數為 <span class="${classColor}">${bmiStatesData[state].color}</span></p>
					<p class="card-text"><small class="text-muted">Last updated ${dateStr}</small></p>
				</div>
			</div>
		</div>
	</div>`
	bmiList.innerHTML += `<div>${content}</div>`;
	historyBmiData.push(content);
}

// 按下按鈕後計算
calculateBtn.addEventListener('click', calculate);

function calculate() {
	let heightNum = height.value;
	let weightNum = weight.value;
	console.log(heightNum, weightNum);
	let bmi = (weightNum / ((heightNum / 100) * (heightNum / 100))).toFixed(2);
	let state = '';
	let classColor = '';

	if (bmi < 18.5) {
		// overThin
		state = 'overThin'
		classColor = 'blue'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (18.5 <= bmi && bmi < 24) {
		// normal
		state = 'normal'
		classColor = 'red'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (124 <= bmi && bmi < 27) {
		// normal
		state = 'overWeight'
		classColor = 'orange'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (27 <= bmi && bmi < 30) {
		// normal
		state = 'mildFat'
		classColor = 'yellow'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (30 <= bmi && bmi < 35) {
		// normal
		state = 'moderateFat'
		classColor = 'black'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else if (bmi > 35) {
		// normal
		state = 'severeFat'
		classColor = 'green'
		bmiStateText(heightNum, weightNum, bmi, state, classColor)
	} else {
		bmiList.innerHTML = `<div>請輸入身高、體重</div>`;
	}

	console.log(bmi);
	// bmiList.innerHTML = `你的 BMI 為 ${bmi}`;
	form.reset(); // form 的重置方法
};

// 按下按鈕後計算
clearBtn.addEventListener('click', clear);

function clear(){
	bmiList.innerHTML = '';
}