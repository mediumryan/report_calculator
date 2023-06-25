$(function () {
  // 인풋
  const input1 = $("#input1");
  const input2 = $("#input2");
  // 버튼
  const plusBtn = $(".plus_btn");
  const minusBtn = $(".minus_btn");
  const multiBtn = $(".multi_btn");
  const deviBtn = $(".devi_btn");
  // 결과값
  const results = $("#results");
  const resultValue = $(".result_value");

  // 이벤트 핸들 함수

  function displayResults() {
    setTimeout(() => {
      results.css("display", "flex");
    }, 300);
  }

  function painting(value) {
    resultValue.text(value);
  }

  function handlePlusBtn() {
    results.css("display", "none");
    const input1Value = Number(input1.val());
    const input2Value = Number(input2.val());
    if (input1Value !== 0 && input2Value !== 0) {
      const plusResult = input1Value + input2Value;
      painting(plusResult);
      displayResults();
    } else {
      alert("숫자를 잘 넣었는지 확인해보세요!");
    }
  }

  function handleMinusBtn() {
    results.css("display", "none");
    const input1Value = Number(input1.val());
    const input2Value = Number(input2.val());

    if (input1Value !== 0 && input2Value !== 0) {
      const minusResult = input1Value - input2Value;
      painting(minusResult);
      displayResults();
    } else {
      alert("숫자를 잘 넣었는지 확인해보세요!");
    }
  }

  function handleMultiBtn() {
    results.css("display", "none");
    const input1Value = Number(input1.val());
    const input2Value = Number(input2.val());

    if (input1Value !== 0 && input2Value !== 0) {
      const multiResult = input1Value * input2Value;
      painting(multiResult);
      displayResults();
    } else {
      alert("숫자를 잘 넣었는지 확인해보세요!");
    }
  }

  function handleDeviBtn() {
    results.css("display", "none");
    const input1Value = Number(input1.val());
    const input2Value = Number(input2.val());

    if (input1Value !== 0 && input2Value !== 0) {
      const deviResult = Math.floor(input1Value / input2Value);
      painting(deviResult);
      displayResults();
    } else {
      alert("숫자를 잘 넣었는지 확인해보세요!");
    }
  }

  // 이벤트
  plusBtn.on("click", handlePlusBtn);
  minusBtn.on("click", handleMinusBtn);
  multiBtn.on("click", handleMultiBtn);
  deviBtn.on("click", handleDeviBtn);
});
